import http from "./httpService";


///DataSetFileUploader API starts here
const DataSetFileUploader = async (fileInput, _id, projectName) => {
  var formdata = new FormData();
  formdata.append("file", fileInput, "ui-test-features 1.csv");

  try {
    const data = await http.post(
      `dataset/upload?name=${projectName}&project_id=${_id}`,
      formdata
    );
    return data;
  } catch (e) {
    return "something went wrong";
  }
};
///DataSetFileUploader API starts here

// eslint-disable-next-line import/no-anonymous-default-export

export { 
  DataSetFileUploader,
};
