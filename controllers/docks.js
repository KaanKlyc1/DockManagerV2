import axios from "axios";

let myData = [];

export const getDocks = async (req, res) => {
  const response = await axios.get("http://192.168.0.245:42041/docks");
  myData = response.data;
  console.log(myData);
  res.render("index", { docks: myData });
};

export const createDocks = async (req, res) => {
  let updateData = {
    code: req.body.code,
    name: req.body.name,
    capacity: Number(req.body.capacity),
    description: req.body.description,
    props: {
      key: req.body.propsKey,
      value: req.body.propsValue,
    },
  };

  const response = await axios.post(
    "http://192.168.0.245:42041/docks",
    updateData
  );

  console.log(updateData);
  console.log(req.body);
  res.redirect("/");
};

export const deleteDock = async (req, res) => {
  const id = req.body.dockId;
  console.log("value id is : ", id);
  const response = await axios.delete(`http://192.168.0.245:42041/docks/${id}`);
  res.redirect("/");
};
export const updateDock = async (req, res) => {
  if (req.method == "GET") {
    const id = req.query.dockId;

    console.log(id);

    const response = await axios.get(`http://192.168.0.245:42041/docks/${id}`);
    myData = response.data;
    console.log(myData);
    res.render("update", { dock: myData });
  } else if (req.method == "POST") {
    const id = req.body.updateButton;
    console.log(id);
    const response1 = await axios.get(`http://192.168.0.245:42041/docks/${id}`);
    myData = response1.data;

    let updateData = {
      code: myData.code,
      name: req.body.name,
      capacity: Number(req.body.capacity),
      description: req.body.description,
      props: {
        key: req.body.propsKey,
        value: req.body.propsValue,
      },
    };

    const response3 = await axios.put(
      `http://192.168.0.245:42041/docks/${id}`,
      updateData
    );

    res.redirect("/");
  }
};
