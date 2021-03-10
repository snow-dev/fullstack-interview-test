import app from '../../src/app';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp)
const expect = chai.expect;
const request = chai.request;

describe( '/GET Git repository data', () => {
	it.skip( 'should request respository data, return 200 and data', (done) => {
		request(app).get('/repository').send().then(response => {
			// console.debug('Git tests response: ', response.body);
			expect(response.body.statusCode).to.be.equal(200);
			done();
		}).catch(err => {
			done(err);
		});
	} );
	
	it( 'should request repository commits data, with 200 status', (done) => {
		// https://api.github.com/repos/FlatDigital/fullstack-interview-test/commits
		request(app).get('/commits').send().then(response => {
			// console.debug('Git tests response: ', response.body);
			expect(response.body.statusCode).to.be.equal(200);
			expect(response.body.error).to.be.equal(false);
			// expect(response.body.data.length).to.be.greaterThan(0);
			done();
		}).catch(err => {
			done(err);
		});
	} );
	
	it( 'should request repository branches data, with 200 status', (done) => {
		//https://api.github.com/repos/FlatDigital/fullstack-interview-test/branches
		request(app).get('/branches').send().then(response => {
			// console.debug('Git tests response: ', response);
			expect(response.body.statusCode).to.be.equal(200);
			expect(response.body.error).to.be.equal(false);
			// expect(response.body.data.length).to.be.greaterThan(0);
			done();
		}).catch(err => {
			done(err);
		});
	} );
	
	it('should request commits by  branches sha, with 200 status', (done) => {
		request(app).post('/branchCommits').send({ branch: 'master'}).then(response => {
			// console.debug('Git tests response: ', response.body);
			expect(response.body.statusCode).to.be.equal(200);
			expect(response.body.error).to.be.equal(false);
			// expect(response.body.data.length).to.be.greaterThan(0);
			done();
		}).catch(err => {
			done(err);
		});
	} );
	
} );