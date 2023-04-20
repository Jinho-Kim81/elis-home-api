"use strict";

const output = {
  hello: (req, res) => {
    //기능
    res.render("home/index");
  },
  login: (req, res) => {
    //기능
    res.render("home/login");
  },
};

//테스트 데이터
const users = {
  id: ["kim", "jin", "ho"],
  psword: ["123", "456", "789"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pswd1 = req.body.pswd;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);

      if (users.psword[idx] === pswd1) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
