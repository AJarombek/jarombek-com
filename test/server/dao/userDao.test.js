/**
 * Testing the User Data Access Object
 * @author Andrew Jarombek
 * @since 9/1/2019
 */

import UserDao from '../../../src/server/dao/userDao';
import Audit from '../../../src/server/model/audit';
import User from '../../../src/server/model/user';
import mockingoose from 'mockingoose';

// Create a mock of the UserDao class.  Save methods which are monkey-patched for future use.
const MockUserDao = UserDao;
const getByEmail = MockUserDao.getByEmail;

const MockUser = User;
const createUser = MockUser.create;

const MockAudit = Audit;
const createAudit = MockAudit.create;

describe('insert()', () => {
    it('should throw error if the user already exists', async () => {
        MockUserDao.getByEmail = (email) => email === 'andrew@jarombek.com';

        const reponse = await MockUserDao.insert({email: 'andrew@jarombek.com'});
        expect(reponse)
            .toThrowError(new Error('User already exists with email andrew@jarombek.com'));
    });

    it("should return the new user if the user doesn't yet exists", async () => {

        const newUser = {
            email: 'andrew@jarombek.com',
            subscribe_date: Date.now(),
            first: 'Andrew',
            last: 'Jarombek',
            hash: 'pwhash',
            verify_cd: '1234',
            unsub_cd: '5678',
            verified: false,
            deleted: false
        };

        MockUserDao.getByEmail = (email) => email === 'andrew@jarombek.com';

        MockAudit.create = () => {};
        MockUser.create = () => newUser;

        const reponse = await MockUserDao.insert({email: 'andrew@jarombek.com'});
        expect(reponse).toEqual(newUser);
    });
});