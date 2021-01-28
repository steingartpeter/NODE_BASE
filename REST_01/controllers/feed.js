exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      { title: "Ez az első post", content: "Nincs benne semmi, csak teszt" },
      { title: "Ez a második post", content: "De ez is csak teszt" },
    ],
  });
};

exports.createPOST = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //Create in the DB
  res.status(201).json({
    msg: "Post crrated successfully!",
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
