/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 4/28/2018
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

preview = [
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Recently I looked at RabbitMQ, a message broker used to communicate between different parts of an application.  An analogy I really liked is that RabbitMQ puts a post office in an application, where producers put messages in a post office box, which are then routed to consumers",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" RabbitMQ configuration can be written in any language with a RabbitMQ library (which consists of most languages you know).  This is extremely powerful since different pieces of the RabbitMQ channel can be implemented in different languages.  For example, let's say a RabbitMQ server has one producer and three consumers.  The single producer might be written in Java, while the three consumers might be written in JavaScript, Python, and PHP.  Imagine all the different possibilities of sending RabbitMQ messages across applications! ",
                "children":null
            }
        ]
    }
];

content = [
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Recently I looked at RabbitMQ, a message broker used to communicate between different parts of an application.  An analogy I really liked is that RabbitMQ puts a post office in an application, where producers put messages in a post office box, which are then routed to consumers",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"1",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" RabbitMQ configuration can be written in any language with a RabbitMQ library (which consists of most languages you know).  This is extremely powerful since different pieces of the RabbitMQ channel can be implemented in different languages.  For example, let's say a RabbitMQ server has one producer and three consumers.  The single producer might be written in Java, while the three consumers might be written in JavaScript, Python, and PHP.  Imagine all the different possibilities of sending RabbitMQ messages across applications! ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" In order to get to know RabbitMQ better, I made an enhanced 'hello world' example where producers send JSON representing running logs to different consumers.  All the code is in Python, since the RabbitMQ Python API is very short and sweet!  Let's take a look! ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Producer"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Producer",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" My producer starts by taking command line arguments and converting them to JSON.  This JSON is used for the message bodies sent across the RabbitMQ channel.  The producer also takes arguments to help create routing keys, which are like mailing addresses. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# The ArgumentParser API is used for specifying command line arguments\n# description - a text description shown when you use the --help argument\nparser = ArgumentParser(description='Upload a New Log')\n\n# Arguments that specify the routing keys\n# dest - the destination variable to hold an array of routing keys\n# const - the string that will be placed in the dest array if the argument is used\nparser.add_argument(\"-WXC\", action=\"append_const\", dest=\"routing_keys\", const=\"womensxc\",\n                    default=[], help=\"use the woman's cross country routing key\")\nparser.add_argument(\"-WTF\", action=\"append_const\", dest=\"routing_keys\", const=\"womenstf\",\n                    default=[], help=\"use the woman's track & field routing key\")\nparser.add_argument(\"-MXC\", action=\"append_const\", dest=\"routing_keys\", const=\"mensxc\",\n                    help=\"use the men's cross country routing key\")\nparser.add_argument(\"-MTF\", action=\"append_const\", dest=\"routing_keys\", const=\"menstf\",\n                    help=\"use the men's track & field routing key\")\nparser.add_argument(\"-ALUM\", action=\"append_const\", dest=\"routing_keys\", const=\"alumni\",\n                    help=\"use the alumni routing key\")\n\n# Specify all the command line arguments that specify running log JSON properties\n# The first argument is the command line short form, and the second argument is the long form\n# help - description displayed when you use the --help argument\nparser.add_argument(\"-n\", \"--name\", help=\"the name of the runner\")\nparser.add_argument(\"-d\", \"--distance\", type=float, help=\"the distance run\")\nparser.add_argument(\"-m\", \"--metric\", choices=[\"miles\", \"kilometers\", \"meters\"],\n                    help=\"the distance run metric\")\nparser.add_argument(\"-t\", \"--time\", help=\"the time taken on the run\")\nparser.add_argument(\"-dt\", \"--date\", help=\"the date of the run 'yyyy-mm-dd'\")\nparser.add_argument(\"-l\", \"--location\", help=\"the location of the run\")\nparser.add_argument(\"-des\", \"--description\", help=\"a description of the run\")\n\n# Parse the command line arguments into the args object with the arguments as variables\nargs = parser.parse_args()\n\n# Build the JSON object to send across Rabbit\njson_object = dict()\njson_object['name'] = args.name\njson_object['distance'] = args.distance\njson_object['metric'] = args.metric\njson_object['time'] = args.time\njson_object['date'] = args.date\njson_object['location'] = args.location\njson_object['description'] = args.description\n\njson_data = json.dumps(json_object)\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Now I need to generate a routing key for this message.  Routing keys in RabbitMQ are strings separated by ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":".",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" symbols.  For example, a key could be written as ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"foo.bar",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  These keys are used in the topic exchange type, where each consumer specifies a routing key pattern to subscribe to",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"def build_routing_key(key_list):\n    \"\"\" Build up the routing key from a list of routes \"\"\"\n\n    str = \"\"\n\n    for i in range(len(key_list)):\n        if i != 0:\n            str += \".\"\n\n        str += key_list[i]\n\n    return str\n\nrouting_key = build_routing_key(args.routing_keys)\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Now I need to create a connection to RabbitMQ.  First I created two new RabbitMQ users on the command line, one for consuming and one for producing.  The following example creates the users and gives them both full permissions to configure, read, and write to RabbitMQ across all queues and exchanges.  The ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"\".*\"",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" pattern is what matches to any queue or exchange, with the first pattern for configuring, the second for reading, and the last for writing",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"3",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Add a new RabbitMQ user to consume messages\nrabbitmqctl add_user running-log-consumer iconsume\n\n# Add a new RabbitMQ user to produce messages\nrabbitmqctl add_user running-log-producer iproduce\n\nrabbitmqctl set_permissions running-log-consumer \".*\" \".*\" \".*\"\nrabbitmqctl set_permissions running-log-producer \".*\" \".*\" \".*\"\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Since I'm building the producer, I'll use the ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"running-log-producer",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" user.  A connection to RabbitMQ is done over TCP (a reliable data stream protocol between applications).  Inside each RabbitMQ TCP connection is a channel, which is a virtual connection to perform messaging commands",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"4",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The following code sets up this channel: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"credentials = pika.PlainCredentials(cred.USERNAME, cred.PASSWORD)\nconnection_params = pika.ConnectionParameters(cred.SERVER, virtual_host=cred.VHOST,\n                                                credentials=credentials)\n\nconnection = pika.BlockingConnection(connection_params)\nchannel = connection.channel()\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Now comes the largest piece of the producer: the exchange.  In fact, all the producer really does is publish messages on the exchange and RabbitMQ handles the rest.  Eventually, exchanges hand off messages to queues based on specified routing keys",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"5",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" The following code creates an exchange and publishes a message to it with the JSON I created earlier. The full code for the producer is up on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/\n2018/01-Jan/1-24-RabbitMQ/producer.py"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"GitHub",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Declare the running-log exchange\n# exchange -- the name of the exchange\n# exchange_type -- the type of exchange, in this case a topic exchange\n# passive -- perform an exchange declare (False) or just check if it exists (True)\n# durable -- If the exchange will survive a RabbitMQ reboot\n# auto_delete -- If the exchange will be removed when no queues are bound to it\nchannel.exchange_declare(exchange=cred.EXCHANGE, exchange_type='topic', passive=False,\n                            durable=True, auto_delete=False)\n\n# Publish to the channel and check for publisher confirms\n# exchange -- the exchange to publish to\n# routing_key -- the routing key to bind to\n# properties -- basic properties of the message\n# body -- the message contents\nif channel.basic_publish(exchange=cred.EXCHANGE, routing_key=routing_key, properties=msg_props,\n                            body=json_data):\n    print(\"Confirm Received!\")\nelse:\n    print(\"Message Lost!\")\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Consumer"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Consumer",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Now its time to build the RabbitMQ consumer.  Similar to the producer, I started by creating a connection and defining an exchange.  I then created a queue on the exchange and determined all the routing keys that the queue accepts.  The python code takes routing keys as command line arguments.  If there is no command line argument, the queue accepts all routing keys. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Declare a queue and create it if needed\n# queue --  the name of the queue - if you dont specify a name RabbitMQ will auto create one\n# exclusive -- only allow access by the current connection\n# durable -- Survives a reboot\nresult = channel.queue_declare(queue='log', exclusive=True, durable=True)\nqueue_name = result.method.queue\n\n# Use command line arguments to get the binding keys\nbinding_keys = sys.argv[1:]\nif not binding_keys:\n    # Bind a queue to an exchange and match to all routing keys ('#' operator)\n    channel.queue_bind(exchange=cred.EXCHANGE, queue=queue_name, routing_key='#')\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" Now that the queues are set up, I created a consumer to read messages.  The following Python code sets up a consumer and tells it to listen to certain queues.  The consumer uses a callback function which is invoked when messages are received. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"def consumer(ch, method, properties, body):\n    \"\"\" Consumer callback is called when a message is consumed \"\"\"\n    if body == 'quit':\n\n        # Cancel a consumer\n        # consumer_tag -- id for the consumer\n        ch.basic_cancel(consumer_tag='consumer')\n        ch.stop_consuming()\n    else:\n        print(\" [x] %r:%r\" % (method.routing_key, body))\n    return\n\n# Start a queue consumer and bind messages to the callback function\n# queue -- the name of the queue to consume from\n# consumer_tag -- the id of the consumer\n# no_ack -- tell the broker not to expect a response back\nchannel.basic_consume(consumer, queue=queue_name, consumer_tag='consumer', no_ack=True)\nchannel.start_consuming()\n",
        "children":null
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" If you want to run the producers and consumers to see messaging in action, the commands are on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/jarombek-com-sources/blob/master/2018/01-Jan/1-24-RabbitMQ/setup.sh"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"GitHub",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Moving Forward"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Moving Forward",
                "children":null
            }
        ]
    },
    {
        "el":"p",
        "attributes":null,
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":" While I wrote my RabbitMQ code in Python, it can be written in many different languages! This code shows the small amount of configuration needed to set up messaging.  RabbitMQ is simply a data transfer mechanism, the real power of an application is the code around it! ",
                "children":null
            }
        ]
    }
];

postName = "jan-24-2018-rabbitmq";
postDate = new Date('2018-01-24T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "First Look at RabbitMQ",
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "RabbitMQ",
            picture: "https://asset.jarombek.com/logos/rabbitmq.png",
            color: "rabbitmq"
        },
        {
            name: "Message Broker"
        },
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Alvaro Videla &amp; Jason J.W. Williams, ",
            endName: " (Shelter Island, NY: Manning, 2012), 2",
            linkName: "RabbitMQ In Action",
            link: "https://www.manning.com/books/rabbitmq-in-action"
        },
        {
            startName: "",
            endName: ", 22",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/rabbitmq-in-action"
        },
        {
            startName: "",
            endName: ", 45",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/rabbitmq-in-action"
        },
        {
            startName: "",
            endName: ", 14",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/rabbitmq-in-action"
        },
        {
            startName: "",
            endName: ", 20",
            linkName: "Ibid.",
            link: "https://www.manning.com/books/rabbitmq-in-action"
        },
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});