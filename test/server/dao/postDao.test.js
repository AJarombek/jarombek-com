/**
 * Testing the Post Data Access Object
 * @author Andrew Jarombek
 * @since 6/23/2019
 */

import PostDao from '../../../src/server/dao/postDao';

describe('getPaginatedPosts()', () => {

    it('should invoke getAll() if query is null', async () => {
        const MockPostDao = PostDao;
        MockPostDao.getAll = (page, limit) => `${page},${limit}`;

        const reponse = await MockPostDao.getPaginatedPosts(1, 12, null);
        expect(reponse).toEqual("1,12");
    });
});
