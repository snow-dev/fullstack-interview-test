
export default (promise) => async (req, res, next) => {
	try {
		const result = await promise(req, res, next);
		return res.send({
			data: result.data,
			message: result.message,
			error: result.error,
			statusCode: result.statusCode
		});
	} catch (err) {
		return res.send(err)
	}
};