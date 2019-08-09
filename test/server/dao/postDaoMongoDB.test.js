/**
 * Testing the Post Data Access Object with connections to my test environment MongoDB instance.
 * @author Andrew Jarombek
 * @since 8/7/2019
 */

import mongoose from 'mongoose';
import PostDao from "../../../src/server/dao/postDao";

describe('getPreviewByName()', () => {

    beforeAll(() => {
        console.info('connecting to mongoDB...');
        mongoose.connect('mongodb://localhost:27017/jarombekcom');
    });

    it('should return post preview document as expected', async () => {

        const expectedResult = {
            name: "jul-18-2019-mongodb",
            title: "Intro to MongoDB",
            description: "intro to mongodb",
            date: (new Date('2019-07-18T12:00:00')).toISOString(),
            type: "Discovery",
            views: 0,
            tags: [
                {
                    name: "JavaScript",
                    picture: "https://asset.jarombek.com/logos/js.png",
                    color: "javascript"
                },
                {
                    name: "MongoDB",
                    picture: "https://asset.jarombek.com/logos/mongodb.png",
                    color: "mongodb"
                }
            ],
            preview: [],
            previewString: "",
            sources: []
        };

        const result = await PostDao.getPreviewByName('jul-18-2019-mongodb');
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(expectedResult);
    });
});

describe('getContentByName()', () => {

    it('should return post content document as expected', async () => {

        const expectedResult = {
            name: "jul-18-2019-mongodb",
            content: [],
            contentString: "javascript and mongodb"
        };

        const result = await PostDao.getContentByName('jul-18-2019-mongodb');
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(expectedResult);
    });
});

describe('getPreviewsByDate()', () => {

    it('should return post preview documents as expected', async () => {

        const expectedResult = [{
            name: "jul-20-2019-react",
            title: "Learning React",
            description: "learning react",
            date: (new Date('2019-07-20T12:00:00')).toISOString(),
            type: "Discovery",
            views: 0,
            tags: [
                {
                    name: "React",
                    picture: "https://asset.jarombek.com/logos/react.png",
                    color: "react"
                },
                {
                    name: "JavaScript",
                    picture: "https://asset.jarombek.com/logos/js.png",
                    color: "javascript"
                }
            ],
            preview: [],
            previewString: "",
            sources: []
        }];

        const result = await PostDao.getPreviewsByDate();
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(expectedResult);
    });
});

describe('getContentByDate()', () => {

    it('should return post content documents as expected', async () => {

        const expectedResult = [{
            name: "jul-20-2019-react",
            date: (new Date('2019-07-20T12:00:00')).toISOString(),
            content: [],
            contentString: "javascript and react and more javascript"
        }];

        const result = await PostDao.getContentByDate();
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(expectedResult);
    });
});

describe('getPreviewByTextSearch()', () => {

    it('should return post preview documents as expected', async () => {

        const expectedResult = [
            {
                name: "jul-17-2019-jest-testing",
                title: "Jest Testing",
                description: "jest testing",
                date: (new Date('2019-07-17T12:00:00')).toISOString(),
                type: "Discovery",
                views: 0,
                tags: [
                    {
                        name: "JavaScript",
                        picture: "https://asset.jarombek.com/logos/js.png",
                        color: "javascript"
                    }
                ],
                preview: [],
                previewString: "",
                sources: [],
                score: 5.5
            },
            {
                name: "jul-18-2019-mongodb",
                title: "Intro to MongoDB",
                description: "intro to mongodb",
                date: (new Date('2019-07-18T12:00:00')).toISOString(),
                type: "Discovery",
                views: 0,
                tags: [
                    {
                        name: "JavaScript",
                        picture: "https://asset.jarombek.com/logos/js.png",
                        color: "javascript"
                    },
                    {
                        name: "MongoDB",
                        picture: "https://asset.jarombek.com/logos/mongodb.png",
                        color: "mongodb"
                    }
                ],
                preview: [],
                previewString: "",
                sources: [],
                score: 5.5
            },
            {
                name: "jul-20-2019-react",
                title: "Learning React",
                description: "learning react",
                date: (new Date('2019-07-20T12:00:00')).toISOString(),
                type: "Discovery",
                views: 0,
                tags: [
                    {
                        name: "React",
                        picture: "https://asset.jarombek.com/logos/react.png",
                        color: "react"
                    },
                    {
                        name: "JavaScript",
                        picture: "https://asset.jarombek.com/logos/js.png",
                        color: "javascript"
                    }
                ],
                preview: [],
                previewString: "",
                sources: [],
                score: 5.5
            }
        ];

        const result = await PostDao.getPreviewByTextSearch("javascript");
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(expectedResult);
    });
});

describe('getContentByTextSearch()', () => {

    it('should return post content documents as expected', async () => {

        const expectedResult = [
            {
                name: "jul-20-2019-react",
                date: (new Date('2019-07-20T12:00:00')).toISOString(),
                content: [],
                contentString: "javascript and react and more javascript",
                score: 5
            },
            {
                name: "jul-17-2019-jest-testing",
                date: (new Date('2019-07-17T12:00:00')).toISOString(),
                content: [],
                contentString: "jest and javascript",
                score: 3.333333333333333
            },
            {
                name: "jul-18-2019-mongodb",
                date: (new Date('2019-07-18T12:00:00')).toISOString(),
                content: [],
                contentString: "javascript and mongodb",
                score: 3.333333333333333
            }
        ];

        const result = await PostDao.getContentByTextSearch("javascript");
        expect(JSON.parse(JSON.stringify(result))).toMatchObject(expectedResult);
    });
});