/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 3/30/2020
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
                "value":" In my new role at work, a good chunk of my programming is Python based and revolves around data analysis.  I already knew Python, however I wanted a review libraries such as numpy and  learn libraries such as pandas and matplotlib.  This article discusses numpy, short for \"Numerical Python\".  The goal of this article isn't to teach numpy to beginners, instead focusing on  library aspects I found most interesting. ",
                "children":null
            }
        ]
    },
    {
        "el":"h5",
        "attributes":{
            "title":"What is Numpy"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Numpy?",
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
                "value":" In my new role at work, a good chunk of my programming is Python based and revolves around data analysis.  I already knew Python, however I wanted a review libraries such as numpy and  learn libraries such as pandas and matplotlib.  This article discusses numpy, short for \"Numerical Python\".  The goal of this article isn't to teach numpy to beginners, instead focusing on  library aspects I found most interesting. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"What is Numpy"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"What is Numpy?",
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
                "value":" Numpy is a library used for data analysis and scientific computing.  At its most basic level, numpy exposes an API for working with arrays of one or more dimensions.  Numpy is often used in conjunction with higher-level libraries such as pandas, which builds upon numpy arrays. ",
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
                "value":" A single-dimension numpy array containing the numbers 1 through 3 is created with the following code: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"import numpy as np\n\narr = np.array([1, 2, 3])\n",
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
                "value":" Since Python already has native lists, the typical question to ask is what benefits numpy arrays provide. First, numpy arrays are fast.  Numpy stores its arrays in a separate storage location from other Python objects and avoids certain overheads found in all Python objects",
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
                "value":".  Its lower level C implementation helps facilitate extremely fast array manipulation and analysis. ",
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
                "value":" In my opinion, numpy's API is superior to the native Python list implementation.  Simple array operations are performed in a more concise manner, and advanced commands exist that are challenging to implement in the Python list API.  One of the simple features that shows the power of numpy is vectorization. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Vectorization"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Vectorization",
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
                "value":" Numpy arrays provide ",
                "children":null
            },
            {
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"vectorization",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" abilities.  Vectorization in numpy is when operations are applied to entire arrays instead of individual items within a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop",
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
                "value":".  Instead of writing a  ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop for numpy arrays in Python code, the underlying numpy API uses a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop in its C implementation, which is much faster than native Python.  As a simple vectorization example, let's take a numpy array and multiply each element by two. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"arr = np.arange(10)\narr\n\n# Out[1]: array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])\n\narr * 2\n\n# Out[2]: array([ 0,  2,  4,  6,  8, 10, 12, 14, 16, 18])\n",
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
                "value":" The output above is what you would see when running the code in a ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://jupyter.org/"
                },
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"Jupyter Notebook",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The initial ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"arange()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" function creates an array of length 10 from 0 to 9.  Next, a vectorization operation is performed.  Each item in the array is multiplied by two.  An equivalent Python list operation would use a ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"for",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" loop. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"native_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n\ndef mult_by_2(arr: list, val: int) -> list:\n  new_arr = arr.copy()\n\n  for i in range(len(new_arr)):\n    new_arr[i] *= val\n\n  return new_arr\n\nmult_by_2(native_arr, 2)\n\n# Out[3]: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]\n",
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
                "value":" Vectorization operations on numpy arrays don't mutate the original array, instead creating a new array instance.  Therefore, my native Python implementation first makes a copy of the existing list before making changes. ",
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
                "value":" The numpy vectorization I wrote applied a multiplication operator (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"*",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") with a scalar value (",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":") to an array.  Vectorization operators can also apply an operator with an array to an equally sized array",
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
                "value":".  For example, the following code multiplies the items in each array with each other. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"arr * arr\n\n# Out[4]: array([ 0,  1,  4,  9, 16, 25, 36, 49, 64, 81])\n",
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
                "value":" Once again, this would be more difficult to write with native Python lists. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"def mult_together(arr1: list, arr2: list) -> list:\n  return [arr1[i] * arr2[i] for i in range(len(arr1))]\n\nmult_together(native_arr, native_arr)\n\n# Out[5]: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n",
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
                "value":" I made the implementation a bit shorter with a list comprehension, however it still isn't as elegant as the numpy solution. ",
                "children":null
            }
        ]
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Broadcasting"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Broadcasting",
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
                "value":" Related to vectorization, ",
                "children":null
            },
            {
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"broadcasting",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" is when vectorization operators are performed on two arrays of different sizes.  Technically my first example, ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"arr * 2",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", is an example of broadcasting an array of length N to an array of length 1",
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
                "value":".  Numpy has certain rules for how broadcasting works between two arrays",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"6",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  Two arrays are eligible for broadcasting if: ",
                "children":null
            }
        ]
    },
    {
        "el":"comparisontable",
        "attributes":{
            "title":"Broadcasting Rules"
        },
        "value":null,
        "children":[
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Equal Dimensions ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" The dimension values for both arrays are equal.  For example, an array of dimension ",
                                        "children":null
                                    },
                                    {
                                        "el":"strong",
                                        "attributes":null,
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"2 x 3",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" and another array of dimension ",
                                        "children":null
                                    },
                                    {
                                        "el":"strong",
                                        "attributes":null,
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"2 x 3",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" are eligible for broadcasting.  Likewise, an array of dimension ",
                                        "children":null
                                    },
                                    {
                                        "el":"strong",
                                        "attributes":null,
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"2 x 3 x 4",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" and another array of dimension ",
                                        "children":null
                                    },
                                    {
                                        "el":"strong",
                                        "attributes":null,
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"3 x 4",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" are eligible for broadcasting.  However, an array of dimension ",
                                        "children":null
                                    },
                                    {
                                        "el":"strong",
                                        "attributes":null,
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"2 x 3",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" and another array of dimension ",
                                        "children":null
                                    },
                                    {
                                        "el":"strong",
                                        "attributes":null,
                                        "value":null,
                                        "children":[
                                            {
                                                "el":"#text",
                                                "attributes":null,
                                                "value":"3 x 2",
                                                "children":null
                                            }
                                        ]
                                    },
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" are not eligible for broadcasting. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "el":"comparisontableentry",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"h5",
                        "attributes":{
                            "className":"jarombek-cte-title"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"#text",
                                "attributes":null,
                                "value":" Single Dimension Equal to One ",
                                "children":null
                            }
                        ]
                    },
                    {
                        "el":"div",
                        "attributes":{
                            "className":"jarombek-cte-body"
                        },
                        "value":null,
                        "children":[
                            {
                                "el":"p",
                                "attributes":null,
                                "value":null,
                                "children":[
                                    {
                                        "el":"#text",
                                        "attributes":null,
                                        "value":" The dimension value in one array is greater than one while the other is equal to one.  For example, an array of dimension 2 x 3 and another array of dimension 2 x 1 are eligible for broadcasting.  Likewise, an array of dimension 2 x 3 x 4 and another array of dimension 1 x 4 are eligible for broadcasting. ",
                                        "children":null
                                    }
                                ]
                            }
                        ]
                    }
                ]
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
                "value":" Here are broadcasting results from the five scenarios I mentioned in my comparison table above: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Broadcasting [2 x 3] and [2 x 3].\narr1 = np.arange(6).reshape((2, 3))\narr2 = np.ones(6).reshape((2, 3))\n\nassert arr1.shape == (2, 3)\nassert arr2.shape == (2, 3)\n\narr1 + arr2\n\n# Out[6]: array([[1., 2., 3.],\n#                [4., 5., 6.]])\n\n# Broadcasting [2 x 3 x 4] and [3 x 4].\narr1 = np.arange(24).reshape((2, 3, 4))\narr2 = np.arange(12).reshape((3, 4))\n\nassert arr1.shape == (2, 3, 4)\nassert arr2.shape == (3, 4)\n\narr1 - arr2\n\n# Out[7]: array([[[ 0,  0,  0,  0],\n#                 [ 0,  0,  0,  0],\n#                 [ 0,  0,  0,  0]],\n#\n#                [[12, 12, 12, 12],\n#                 [12, 12, 12, 12],\n#                 [12, 12, 12, 12]]])\n\n# Broadcasting [2 x 3] and [3 x 2].\narr1 = np.arange(6).reshape((2, 3))\narr2 = np.arange(6).reshape((3, 2))\n\nassert arr1.shape == (2, 3)\nassert arr2.shape == (3, 2)\n\ntry:\n  arr1 + arr2\n\n  # This point will never be reached.\n  assert False\n\nexcept ValueError as e:\n  assert str(e).strip() == 'operands could not be broadcast together with shapes (2,3) (3,2)'\n\n# Broadcasting [2 x 3] and [2 x 1].\narr1 = np.arange(6).reshape((2, 3))\narr2 = np.arange(1, 3).reshape((2, 1))\n\nassert arr1.shape == (2, 3)\nassert arr2.shape == (2, 1)\n\narr1 + arr2\n\n# Out[8]: array([[1, 2, 3],\n#                [5, 6, 7]])\n\n# Broadcasting [2 x 3 x 4] and [1 x 4].\narr1 = np.arange(24).reshape((2, 3, 4))\narr2 = np.arange(1, 5).reshape((1, 4))\n\nassert arr1.shape == (2, 3, 4)\nassert arr2.shape == (1, 4)\n\nresult = arr1 * arr2\n\n# Out[9]: array([[[ 0,  2,  6, 12],\n#                 [ 4, 10, 18, 28],\n#                 [ 8, 18, 30, 44]],\n#\n#                [[12, 26, 42, 60],\n#                 [16, 34, 54, 76],\n#                 [20, 42, 66, 92]]])\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Ease of Creating Arrays"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Ease of Creating Arrays",
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
                "value":" Creation of lists in Python is straightforward yet limited in options.  More complex list creation can be accomplished with list comprehensions, as shown in the section on vectorization.  Still, even list comprehensions aren't as powerful as the API numpy exposes for array creation. ",
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
                "value":" A good example is a reshaped numpy array.  In comparison to a Python list created with a list comprehension,  the numpy ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"reshape()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" method is more explicit in describing what it accomplishes. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"np.arange(0, 23, 2).reshape(3, 4)\n\n# Out[10]: array([[ 0,  2,  4,  6], [ 8, 10, 12, 14], [16, 18, 20, 22]])\n\n[[i, i+2, i+4, i+6] for i in range(0, 23, 8)]\n\n# Out[11]: [[0, 2, 4, 6], [8, 10, 12, 14], [16, 18, 20, 22]]\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Enhanced Slicing"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Enhanced Slicing",
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
                "value":" Python lists already provide pretty nice slicing capabilities.  Numpy takes slicing to another level. Numpy extends the indexing and slicing syntax in Python single-dimension lists for use in multi-dimensional arrays.  The following examples demonstrate multi-dimensional indexing and slicing. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Unlike Python lists, numpy array indexes accept comma separated values.\n# Each value is a slice for a dimension of the array.\narr = np.array([[0, 1, 2], [3, 4, 5], [6, 7, 8]])\narr[1, 1]\n\n# Out[12]: 4\n\narr[:, :]\n\n# Out[13]: array([[0, 1, 2],\n#                 [3, 4, 5],\n#                 [6, 7, 8]])\n\narr[1:, :1]\n\n# Out[14]: array([[3],\n#                 [6]])\n\narr[:, 2]\n\n# Out[15]: array([2, 5, 8])\n\narr[:, 2] = 10\narr\n\n# Out[16]: array([[ 0,  1, 10],\n#                 [ 3,  4, 10],\n#                 [ 6,  7, 10]])\n",
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
                "value":" Numpy indexing and slicing operations can contain conditional logic.  Here are some more advanced indexing and slicing operations on the same numpy array instance. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"arr\n\n# Out[17]: array([[ 0,  1, 10],\n#                 [ 3,  4, 10],\n#                 [ 6,  7, 10]])\n\narr[2, arr[2] == 6]\n\n# Out[18]: array([6])\n\narr[1, arr[1] > 3]\n\n# Out[19]: array([ 4, 10])\n\narr[arr > 3]\n\n# Out[20]: array([10,  4, 10,  6,  7, 10])\n\narr[~(arr > 5)]\n\n# Out[21]: array([0, 1, 3, 4])\n\narr[(arr < 2) | (arr > 8)]\n\n# Out[22]: array([ 0,  1, 10, 10, 10])\n\narr[(arr > 2) & (arr < 8)]\n\n# Out[23]: array([3, 4, 6, 7])\n\narr[(arr > 3) & (arr < 7)] = 20\narr\n\n# Out[24]: array([[ 0,  1, 10],\n#                 [ 3, 20, 10],\n#                 [20,  7, 10]])\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Reshaping Arrays"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Reshaping Arrays",
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
                "value":" Reshaping numpy arrays is easy with a variety of functions for altering data arrangements.  Some of the basic ones include ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"reshape(shape)",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"flatten()",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":", and ",
                "children":null
            },
            {
                "el":"code",
                "attributes":{
                    "className":"jarombek-inline-code"
                },
                "value":"T",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":" (short for transpose). ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"arr = np.arange(12, 36, 2)\narr\n\n# Out[25]: array([12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34])\n\narr = np.arange(12, 36, 2).reshape(3, 4)\narr\n\n# Out[26]: array([[12, 14, 16, 18],\n#                 [20, 22, 24, 26],\n#                 [28, 30, 32, 34]])\n\narr.flatten()\n\n# Out[27]: array([12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34])\n\narr.T\n\n# Out[28]: array([[12, 20, 28],\n#                 [14, 22, 30],\n#                 [16, 24, 32],\n#                 [18, 26, 34]])\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Custom Functions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Custom Functions",
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
                "value":" While vectorization and built-in numpy functions are extremely helpful when transforming numpy arrays, sometimes they aren't flexible enough for our needs.  In this case, custom functions can be created. For example, I created the following function which converts miles to kilometers: ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"# Custom functions can be created with frompyfunc().  Note that these functions take a performance hit\n# compared to their numpy counterparts.  There is a way to speed up custom functions to numpy-like performance\n# with the numba library.\ndef miles_to_kilometers(miles):\n  return miles * 1.609\n\n# Create a custom unary ufunc (takes a single argument) that converts miles to kilometers\nmile2km = np.frompyfunc(miles_to_kilometers, 1, 1)\n",
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
                "value":" This function can be applied to each item in an array. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"arr = np.array([1, 3, 5])\nmile2km(arr)\n\n# Out[29]: array([1.609, 4.827, 8.045])\n",
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
                "value":" Unfortunately, this custom function is very slow.  The following test shows the time taken by the custom function versus vectorization. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"%timeit mile2km(arr)\n\n# Out[30]: 6.75 µs ± 107 ns per loop\n\n%timeit arr * 1.609\n\n# Out[31]: 1.04 µs ± 11.3 ns per loop\n",
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
                "value":" The performance problem is that custom functions live in Python instead of C, with the latter being much faster. Luckily it is possible to write fast custom numpy functions using a library called ",
                "children":null
            },
            {
                "el":"strong",
                "attributes":null,
                "value":null,
                "children":[
                    {
                        "el":"#text",
                        "attributes":null,
                        "value":"numba",
                        "children":null
                    }
                ]
            },
            {
                "el":"#text",
                "attributes":null,
                "value":". Numba uses LLVM to convert Python code to assembly code",
                "children":null
            },
            {
                "el":"sup",
                "attributes":null,
                "value":"7",
                "children":null
            },
            {
                "el":"#text",
                "attributes":null,
                "value":".  The mile to kilometer function is easily rewritten with numba. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"@nb.jit\ndef miles_to_kilometers(miles):\n  return miles * 1.609\n\narr = np.array([1, 3, 5])\nmiles_to_kilometers(arr)\n\n# Out[32]: array([1.609, 4.827, 8.045])\n",
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
                "value":" The numba function is extremely fast!  In fact, numba functions are often faster than their numpy vectorization counterparts. ",
                "children":null
            }
        ]
    },
    {
        "el":"codesnippet",
        "attributes":{
            "language":"Python"
        },
        "value":"%timeit miles_to_kilometers(np.arange(100))\n\n# Out[33]: 1.18 µs ± 13.9 ns per loop\n\n%timeit np.arange(100) * 1.609\n\n# Out[34]: 1.89 µs ± 53.2 ns per loop\n",
        "children":null
    },
    {
        "el":"sectiontitle",
        "attributes":{
            "title":"Conclusions"
        },
        "value":null,
        "children":[
            {
                "el":"#text",
                "attributes":null,
                "value":"Conclusions",
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
                "value":" Numpy is an array object library that exposes an elegant API which is fun to use.  I've used it often at work and will likely find usages for it in my personal Python code.  If you want to see more numpy code samples, check out my data analytics repository on ",
                "children":null
            },
            {
                "el":"a",
                "attributes":{
                    "href":"https://github.com/AJarombek/\ndata-analytics-prototypes/tree/master/Python/numpy"
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
    }
];

postName = "mar-31-2020-numpy";
postDate = new Date('2020-03-31T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Interesting Aspects of Numpy",
    description: `This article isn’t meant to teach numpy to beginners, instead discussing aspects 
        of the library I found most interesting.`,
    date: postDate,
    type: "Discovery",
    views: postViews,
    tags: [
        {
            name: "Python",
            picture: "https://asset.jarombek.com/logos/python.png",
            color: "python"
        },
        {
            name: "Numpy",
            picture: "https://asset.jarombek.com/logos/numpy.png",
            color: "numpy"
        },
        {
            name: "Data Analysis"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "Wes McKinney, ",
            endName: ", 2nd ed (Sebastopol, CA: O'Reilly, 2017), 88",
            linkName: "Python for Data Analysis: ",
            link: "http://shop.oreilly.com/product/0636920050896.do"
        },
        {
            startName: "\"What is Vectorization?\", ",
            endName: "",
            linkName: "https://realpython.com/numpy-array-programming/#what-is-vectorization",
            link: "https://realpython.com/numpy-array-programming/#what-is-vectorization"
        },
        {
            startName: "\"What is Vectorization?\", ",
            endName: "",
            linkName: "https://stackoverflow.com/a/47755634",
            link: "https://stackoverflow.com/a/47755634"
        },
        {
            startName: "",
            endName: ", 95",
            linkName: "McKinney.",
            link: "http://shop.oreilly.com/product/0636920050896.do"
        },
        {
            startName: "",
            endName: ", 466",
            linkName: "McKinney.",
            link: "http://shop.oreilly.com/product/0636920050896.do"
        },
        {
            startName: "\"Broadcasting: General Broadcasting Rules\", ",
            endName: "",
            linkName: "https://docs.scipy.org/doc/numpy/user/basics.broadcasting.html#general-broadcasting-rules",
            link: "https://docs.scipy.org/doc/numpy/user/basics.broadcasting.html#general-broadcasting-rules"
        },
        {
            startName: "",
            endName: ", 482",
            linkName: "McKinney.",
            link: "http://shop.oreilly.com/product/0636920050896.do"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
