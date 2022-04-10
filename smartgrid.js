module.exports = {
	columns: 12,
	offset: "30px",
	container: {
		maxWidth: "1170px",
		fields: "30px" // Внимание! fields обязан быть >= offset / 2
	},
	breakPoints: {
		md: {
			width: "900px"
		},
		sm: {
			width: "768px",
			fields: "24px"
		},
		xs: {
			width: "576px",
		},
		xxs: {
			width: "320px",
			fields: "15px"
		}
	}
}