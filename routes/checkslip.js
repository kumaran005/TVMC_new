exports.check_slip = (req, res) => {
  var { cand_id } = req.body;

  var sql = `SELECT *, date_format(str_to_date(due_date,'%Y-%m-%d'),'%d %M %Y') due_date from admintv_ems.check_slip where cand_id = '${cand_id}'
  group by certificate_type order by id`;
  db.query(sql, (err, data) => {
    res.send({ check_slip: data });
  });
};
