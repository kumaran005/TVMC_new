// other_add
$('#add_blood_group').on('change',()=>{
  var bg = $("#add_blood_group :selected").val();
  bg == "Others" ? $('#bloodModal').modal('show') : null;
})
select_blood = () => {
  var b = document.getElementById("custom_bg").value;
  var x = document.getElementById("add_blood_group");
  var option = document.createElement("option");
  option.text = b;
  option.value = b;
  x.add(option);
  document.getElementById("add_blood_group").value = b;
};
$('#add_religion').on('change',()=>{ 
  var bg = $("#add_religion :selected").val();
  bg == "Others" ? $('#religionModal').modal('show') : null;
})
select_religion = () => {
  var r = document.getElementById("custom_religion").value;
  var x = document.getElementById("add_religion");
  var option = document.createElement("option");
  option.text = r;
  option.value = r;
  x.add(option);
  document.getElementById("add_religion").value = r;
};
$('#add_nationality').on('change',()=>{
  var bg = $("#add_nationality :selected").val();
  bg == "Others" ? $('#nationalityModal').modal('show') : null;
})
select_nationality = () => {
  var n = document.getElementById("custom_nationality").value;
  var x = document.getElementById("add_nationality");
  var option = document.createElement("option");
  option.text = n;
  option.value = n;
  x.add(option);
  document.getElementById("add_nationality").value = n;
};

//other_edit
$('#edit_blood_group').on('change',() =>{
  var bg = $("#edit_blood_group :selected").val();
  bg == "Others" ? $('#editbloodModal').modal('show') : null;
})
select_blood_edit = () => {
  var b = document.getElementById("edit_custom_bg").value;
  var x = document.getElementById("edit_blood_group");
  var option = document.createElement("option");
  option.text = b;
  option.value = b;
  x.add(option);
  document.getElementById("edit_blood_group").value = b;
};
$('#edit_religion').on('change',()=>{
  var bg = $("#edit_religion :selected").val();
  bg == "Others" ? $('#editreligionModal').modal('show') : null;
})
select_religion_edit = () => {
  var r = document.getElementById("edit_custom_religion").value;
  var x = document.getElementById("edit_religion");
  var option = document.createElement("option");
  option.text = r;
  option.value = r;
  x.add(option);
  document.getElementById("edit_religion").value = r;
};
$('#edit_nationality').on('change',()=>{
  var bg = $("#edit_nationality :selected").val();
  bg == "Others" ? $('#editnationalityModal').modal('show') : null;
})
select_nationality_edit = () => {
  var n = document.getElementById("edit_custom_nationality").value;
  var x = document.getElementById("edit_nationality");
  var option = document.createElement("option");
  option.text = n;
  option.value = n;
  x.add(option);
  document.getElementById("edit_nationality").value = n;
};

// mbbs_save
student_home = (params) => {
  var form = document.getElementById(params);
  let data = new FormData(form);
  axios({
    method: "post",
    url: "/student_home",
    data: data,
  })
    .then(function (response) {
      var { cand_id } = response.data;
      // console.log(cand_id);
      document.getElementById("add_cand_id").value = cand_id;
      home_files_only();
      $("#student_home").removeClass("active");
      $("#student_qual").addClass("active");
      $("#add_home").removeClass("show active");
      $("#add_profilee").addClass("show active");
    })
    .catch(function (error) {
      console.log(error);
    });
};
student_qual = (params) => {
  var form = document.getElementById(params);
  let data = new FormData(form);
  axios({
    method: "post",
    url: "/student_qual",
    data: data,
  })
    .then((res) => {
      console.log(res);
      $("#student_qual").removeClass("active");
      $("#student_bank").addClass("active");
      $("#add_profilee").removeClass("show active");
      $("#add_bankk").addClass("show active");
    })
    .catch((err) => {
      throw err;
    });
};
student_bank = (params) => {
  var form = document.getElementById(params);
  let data = new FormData(form);
  axios({
    method: "post",
    url: "/student_bank",
    data: data,
  })
    .then((res) => {
      console.log(res);
      bank_files_only();
      $("#student_bank").removeClass("active");
      $("#student_docs").addClass("active");
      $("#add_bankk").removeClass("show active");
      $("#add_contact").addClass("show active");
    })
    .catch((err) => {
      throw err;
    });
};

back_to_pre = (params) => {
  if (params == "student_home") {
    $("#student_home").addClass("active");
    $("#student_qual").removeClass("active");
    $("#add_home").addClass("show active");
    $("#add_profilee").removeClass("show active");
  }
  if (params == "student_qual") {
    $("#student_qual").addClass("active");
    $("#student_bank").removeClass("active");
    $("#add_profilee").addClass("show active");
    $("#add_bankk").removeClass("show active");
  }
  if (params == "student_bank") {
    $("#student_bank").addClass("active");
    $("#student_docs").removeClass("active");
    $("#add_bankk").addClass("show active");
    $("#add_contact").removeClass("show active");
  }
};

// ------------------------mdms_save------------------------------//
student_home_ = (params) => {
  var form = document.getElementById(params);
  let data = new FormData(form);
  axios({
    method: "post",
    url: "/student_home",
    data: data,
  })
    .then(function (response) {
      var { cand_id } = response.data;

      document.getElementById("add_cand_id").value = cand_id;
      home_files_only();
      $("#student_home").removeClass("active");
      $("#student_qual").addClass("active");
      $("#add_home").removeClass("show active");
      $("#add_profilee").addClass("show active");
    })
    .catch(function (error) {
      console.log(error);
    });
};
student_qual_ = (params) => {
  var form = document.getElementById(params);
  let data = new FormData(form);
  axios({
    method: "post",
    url: "/student_qual",
    data: data,
  })
    .then((res) => {
      $("#student_qual").removeClass("active");
      $("#student_bank").addClass("active");
      $("#add_profilee").removeClass("show active");
      $("#add_bankk").addClass("show active");
    })
    .catch((err) => {
      throw err;
    });
};
student_bank_ = (params) => {
  var form = document.getElementById(params);
  let data = new FormData(form);
  axios({
    method: "post",
    url: "/student_bank",
    data: data,
  })
    .then((res) => {
      bank_files_only();
      $("#student_bank").removeClass("active");
      $("#student_surety").addClass("active");
      $("#add_bankk").removeClass("show active");
      $("#add_surety").addClass("show active");
    })
    .catch((err) => {
      throw err;
    });
};
student_surety_ = (params) => {
  var form = document.getElementById(params);
  let data = new FormData(form);
  axios({
    method: "post",
    url: "/student_surety",
    data: data,
  })
    .then((res) => {
      surety_files_only();
      $("#student_surety").removeClass("active");
      $("#student_docs").addClass("active");
      $("#add_surety").removeClass("show active");
      $("#add_contact").addClass("show active");
    })
    .catch((err) => {
      throw err;
    });
};
back_to_prev = (params) => {
  if (params == "student_home") {
    $("#student_home").addClass("active");
    $("#student_qual").removeClass("active");
    $("#add_home").addClass("show active");
    $("#add_profilee").removeClass("show active");
  }
  if (params == "student_qual") {
    $("#student_qual").addClass("active");
    $("#student_bank").removeClass("active");
    $("#add_profilee").addClass("show active");
    $("#add_bankk").removeClass("show active");
  }
  if (params == "student_bank") {
    $("#student_bank").addClass("active");
    $("#student_surety").removeClass("active");
    $("#add_bankk").addClass("show active");
    $("#add_surety").removeClass("show active");
  }
  if (params == "student_surety") {
    $("#student_surety").addClass("active");
    $("#student_docs").removeClass("active");
    $("#add_surety").addClass("show active");
    $("#add_contact").removeClass("show active");
  }
};

home_files_only = () => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var aadhar = document.getElementById("bank_files5");
  var photo = document.getElementById("file");
  var sign = document.getElementById("file2");
  var thump = document.getElementById("file1");

  formData.append("aadhar", aadhar.files[0]);
  formData.append("n_cand_photo", photo.files[0]);
  formData.append("n_cand_sign", sign.files[0]);
  formData.append("n_cand_thumb", thump.files[0]);
  formData.append("cand_id", cand_id);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_home_files", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
    }
  };

  xhr.send(formData);
};
bank_files_only = () => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var passbook = document.getElementById("bank_files1");
  var challan = document.getElementById("bank_files2");
  var sq_challan = document.getElementById("bank_files25");

  formData.append("passbook", passbook.files[0]);
  formData.append("challan", challan.files[0]);
  formData.append("sq_challan", sq_challan.files[0]);
  formData.append("cand_id", cand_id);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_bank_files", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
    }
  };

  xhr.send(formData);
};
surety_files_only = () => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();

  var surety = document.getElementById("files_mdms_surety");
  formData.append("surety", surety.files[0]);
  formData.append("cand_id", cand_id);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_surety_files", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
    }
  };

  xhr.send(formData);
};

// docs_files_upload
docs_files_only_1 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  //
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_1", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("hide");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_2 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  //
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_2", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_3 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  //
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_3", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_4 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  //
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_4", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_5 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  //
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_5", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_6 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);

  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_6", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_7 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_7", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_8 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_8", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_9 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_9", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_10 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_10", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_11 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_11", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_12 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_12", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_13 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_13", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_14 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_14", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_15 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_15", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_16 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_16", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_17 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_17", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_18 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_18", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_19 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_19", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_20 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_20", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_21 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_21", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_22 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_22", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_23 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_23", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_24 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_24", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_25 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_25", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_26 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_26", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_27 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_27", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_28 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_27", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};
docs_files_only_29 = (id, name) => {
  var cand_id = document.getElementById("add_cand_id").value;
  var formData = new FormData();
  var doc = document.getElementById(id);
  if (doc.files[0]) {
    $("#loading").modal("show");
  }
  formData.append(name, doc.files[0]);
  formData.append("cand_id", cand_id);
  formData.append("name", name);

  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.open("POST", "/student_docs_files_27", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      data = this.responseText;
      if (data) {
        $("#loading").modal("toggle");
      }
 setTimeout(function() {
              var isShown = $('#loading').hasClass('show');
              if(isShown){
 				$("#loading").modal("hide");
				}
           }, 2500);
    }
  };

  xhr.send(formData);
};

function reSume111() {
  var num1 = Number(document.getElementById("add_lang_theory").value);
  var num2 = Number(document.getElementById("add_lang_practical").value);
  var num3 = Number(document.getElementById("add_lang_internal").value);
  document.getElementById("add_lang_total").value = num1 + num2 + num3;
}
function reSume211() {
  var num1 = Number(document.getElementById("add_eng_theory").value);
  var num2 = Number(document.getElementById("add_eng_practical").value);
  var num3 = Number(document.getElementById("add_eng_internal").value);

  document.getElementById("add_eng_total").value = num1 + num2 + num3;
}
function reSume311() {
  var num1 = Number(document.getElementById("add_mat_theory").value);
  var num2 = Number(document.getElementById("add_mat_practical").value);
  var num3 = Number(document.getElementById("add_mat_internal").value);

  document.getElementById("add_mat_total").value = num1 + num2 + num3;
}
function reSume411() {
  var num1 = Number(document.getElementById("add_phy_theory").value);
  var num2 = Number(document.getElementById("add_phy_practical").value);
  var num3 = Number(document.getElementById("add_phy_internal").value);

  document.getElementById("add_phy_total").value = num1 + num2 + num3;
}
function reSume511() {
  var num1 = Number(document.getElementById("add_chem_theory").value);
  var num2 = Number(document.getElementById("add_chem_practical").value);
  var num3 = Number(document.getElementById("add_chem_internal").value);

  document.getElementById("add_chem_total").value = num1 + num2 + num3;
}
function reSume611() {
  var num1 = Number(document.getElementById("add_bio_theory").value);
  var num2 = Number(document.getElementById("add_bio_practical").value);
  var num3 = Number(document.getElementById("add_bio_internal").value);

  document.getElementById("add_bio_total").value = num1 + num2;
}
function reSume20() {
  var num1 = Number(document.getElementById("add_lang_total").value);

  var num2 = Number(document.getElementById("add_eng_total").value);
  var num3 = Number(document.getElementById("add_mat_total").value);
  var num4 = Number(document.getElementById("add_phy_total").value);
  var num5 = Number(document.getElementById("add_chem_total").value);
  var num6 = Number(document.getElementById("add_bio_total").value);
  document.getElementById("add_total_mark1").value =
    num1 + num2 + num3 + num4 + num5 + num6;
}
function reSum20() {
  var num1 = Number(document.getElementById("edit_bio_total").value);

  var num2 = Number(document.getElementById("edit_chem_total").value);
  var num3 = Number(document.getElementById("edit_phy_total").value);
  var num4 = Number(document.getElementById("edit_mat_total").value);
  var num5 = Number(document.getElementById("edit_lang_total").value);
  var num6 = Number(document.getElementById("edit_eng_total").value);
  document.getElementById("edit_total_mark1").value =
    num1 + num2 + num3 + num4 + num5 + num6;
}
function reSum19() {
  var num1 = Number(document.getElementById("edit_bio_max").value);

  var num2 = Number(document.getElementById("edit_chem_max").value);
  var num3 = Number(document.getElementById("edit_phy_max").value);
  var num4 = Number(document.getElementById("edit_mat_max").value);
  var num5 = Number(document.getElementById("edit_lang_max").value);
  var num6 = Number(document.getElementById("edit_eng_max").value);
  document.getElementById("edit_max_mark").value =
    num1 + num2 + num3 + num4 + num5 + num6;
}
function reSum191() {
  var num1 = Number(document.getElementById("add_bio_max").value);

  var num2 = Number(document.getElementById("add_chem_max").value);
  var num3 = Number(document.getElementById("add_phy_max").value);
  var num4 = Number(document.getElementById("add_mat_max").value);
  var num5 = Number(document.getElementById("add_lang_max").value);
  var num6 = Number(document.getElementById("add_eng_max").value);
  document.getElementById("add_max_mark").value =
    num1 + num2 + num3 + num4 + num5 + num6;
}
function reSum17() {
  var num1 = Number(document.getElementById("Summax1").value);

  var num2 = Number(document.getElementById("Summax2").value);
  var num3 = Number(document.getElementById("Summax3").value);
  var num4 = Number(document.getElementById("Summax4").value);
  var num5 = Number(document.getElementById("Summax5").value);
  var num6 = Number(document.getElementById("Summax6").value);
  document.getElementById("Sum17").value =
    num1 + num2 + num3 + num4 + num5 + num6;
}
function reSum18() {
  var num1 = Number(document.getElementById("Sum16").value);

  var num2 = Number(document.getElementById("Sum17").value);

  document.getElementById("Sum18").value = (num1 / num2) * 100;
}
function reSum21() {
  var num1 = Number(document.getElementById("edit_total_mark1").value);

  var num2 = Number(document.getElementById("edit_max_mark").value);

  document.getElementById("edit_percentage").value = (num1 / num2) * 100;
}
function reSum121() {
  var num1 = Number(document.getElementById("add_total_mark1").value);

  var num2 = Number(document.getElementById("add_max_mark").value);

  document.getElementById("add_percentage").value = (num1 / num2) * 100;
}
function reSume1() {
  var num1 = Number(document.getElementById("edit_lang_theory").value);

  var num2 = Number(document.getElementById("edit_lang_practical").value);
  var num3 = Number(document.getElementById("edit_lang_internal").value);

  document.getElementById("edit_lang_total").value = num1 + num2 + num3;
}
function reSume2() {
  var num1 = Number(document.getElementById("edit_eng_theory").value);

  var num2 = Number(document.getElementById("edit_eng_practical").value);
  var num3 = Number(document.getElementById("edit_eng_internal").value);

  document.getElementById("edit_eng_total").value = num1 + num2 + num3;
}
function reSume3() {
  var num1 = Number(document.getElementById("edit_mat_theory").value);

  var num2 = Number(document.getElementById("edit_mat_practical").value);
  var num3 = Number(document.getElementById("edit_mat_internal").value);

  document.getElementById("edit_mat_total").value = num1 + num2 + num3;
}
function reSume3() {
  var num1 = Number(document.getElementById("edit_mat_theory").value);

  var num2 = Number(document.getElementById("edit_mat_practical").value);
  var num3 = Number(document.getElementById("edit_mat_internal").value);

  document.getElementById("edit_mat_total").value = num1 + num2 + num3;
}
function reSume4() {
  var num1 = Number(document.getElementById("edit_phy_theory").value);

  var num2 = Number(document.getElementById("edit_phy_practical").value);
  var num3 = Number(document.getElementById("edit_phy_internal").value);

  document.getElementById("edit_phy_total").value = num1 + num2 + num3;
}
function reSume5() {
  var num1 = Number(document.getElementById("edit_chem_theory").value);

  var num2 = Number(document.getElementById("edit_chem_practical").value);
  var num3 = Number(document.getElementById("edit_chem_internal").value);

  document.getElementById("edit_chem_total").value = num1 + num2 + num3;
}
function reSume6() {
  var num1 = Number(document.getElementById("edit_bio_theory").value);

  var num2 = Number(document.getElementById("edit_bio_practical").value);
  var num3 = Number(document.getElementById("edit_bio_internal").value);

  document.getElementById("edit_bio_total").value = num1 + num2 + num3;
}
$(document).ready(function () {
  $("#exampleModalLong ,#loading").modal({
    backdrop: "static",
    keyboard: false,
    show: false,
  });

  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  //same as present address
   $("#chkCopy").click(function () {
    if ($("#chkCopy").is(":checked")) {
      $("#add_pm_district").val($("#add_ps_district").val());
      $("#add_pm_address").val($("#add_ps_address").val());

      $("#add_pm_pincode").val($("#add_ps_pincode").val());
      $("#add_pm_state").val($("#add_ps_state").val());
    } else {
      //Clear on uncheck
      $("#add_pm_district").val("");
      $("#add_pm_address").val("");
      $("#add_pm_pincode").val("");
      $("#add_pm_state").val("");
    }
  });
  $("#chkCopyedit").click(function () {
    if ($("#chkCopyedit").is(":checked")) {
      $("#edit_pm_district").val($("#edit_ps_district").val());
      $("#edit_pm_address").val($("#edit_ps_address").val());

      $("#edit_pm_pincode").val($("#edit_ps_pincode").val());
      $("#edit_pm_state").val($("#edit_ps_state").val());
    } else {
      //Clear on uncheck
      $("#edit_pm_district").val("");
      $("#edit_pm_editress").val("");
      $("#edit_pm_pincode").val("");
      $("#edit_pm_state").val("");
    }
  });
  $(document).on("click", ".edit", function () {
    $(this)
      .parent()
      .siblings("td.data")
      .each(function () {
        var content = $(this).html();
        $(this).html('<input value="' + content + '" />');
      });

    $(this).siblings(".save").show();
    $(this).siblings(".delete").hide();
    $(this).hide();
  });

  $(document).on("click", ".save", function () {
    $("input").each(function () {
      var content = $(this).val();
      $(this).html(content);
      $(this).contents().unwrap();
    });
    $(this).siblings(".edit").show();
    $(this).siblings(".delete").show();
    $(this).hide();
  });

  // $(document).on('click', '.delete', function() {
  // $(this).parents('tr').remove();
  // });
  //   let tBody = document.getElementById('myTable');
  // let modal = document.getElementById('myModal');
  // let tr = tBody.getElementsByTagName('TR');
  // let span = document.getElementsByClassName("close")[1];

  // // When the user clicks on the button, open the modal
  // for (let i = 0; i < tr.length; i++) {
  // tr[i]. onclick = function() {
  // modal.style.display = "block";
  // modal.style.overflow = "auto";
  // modal.style.overflowX= "auto";

  // console.log(this.firstElementChild.innerHTML + ' Selected');
  // };
  // }
  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  // modal.style.display = "none";
  // }
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  // if (event.target == modal) {
  //   modal.style.display = "none";
  // }
  // }

  // To make elements readonly
  $("#myModal :input").prop("readonly", true);
  $("#sign12").prop("readonly", true);
  $("#fileo").prop("disabled", true);

  $(document).on("click", ".browse", function () {
    var file = $(this).parent().parent().parent().find(".file");
    file.trigger("click");
  });
  $(document).on("change", "#browse", function () {
    $(this)
      .parent()
      .find(".form-control")
      .val(
        $(this)
          .val()
          .replace(/C:\\fakepath\\/i, "")
      );
  });

  $(".clickable").click(function () {
    if ($(this).hasClass("collapsed")) {
      $(this).text("Less");
    }
  });

  $(document).on("keypress", ':input[type="number"]', function (e) {
    if (isNaN(e.key)) {
      return false;
    }
  });

  $("#myTable tr").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  $("#editdrop").change(function () {
    if (
      $(this)
        .closest(".table")
        .find("option[value=" + $(this).val() + "]:selected").length > 1
    ) {
      alert("option is already selected");
      $(this).val($(this).find("option:first").val());
    }
  });

  UPLOADCARE_LOCALE_TRANSLATIONS = {
    buttons: {
      choose: {
        files: {
          one: '<i class ="fa fa-upload"></i>',
          other: '<i class ="fa fa-upload"></i> ',
        },
        images: {
          one: '<i class ="fa fa-upload"></i>',
          other: '<i class ="fa fa-upload"></i>',
        },
      },
    },
  };
});

$(function () {
  // $("#btnAddd").bind("click", function () {
  //     var div = $("<tr />");
  //     div.html(GetDynamicTextBox(""));
  //     $("#TextBoxContainerr").append(div);
  // });
  $("body").on("click", "#closee", function () {
    var table = document.getElementById("TextBoxContainerr");
    var rowCount = table.rows.length;

    if (rowCount > 1) {
      $(this).closest("tr").remove();
    } else {
      alert("You have to upload at least one document.");
      return GetDynamicTextBox(value);
    }
  });
});
// function GetDynamicTextBox(value) {
//   return '<td > <div class="form-group"style="position: relative;top: -7px;"><i class="fa fa-caret-down "id="drop"></i><select class="form-control" id="editdrop" style="width: 200px;"><option hidde="" selected="">&nbsp;</option><option>Community Certificate</option><option>Transfer Certificate</option><option>Conduct Certificate</option><option>Eligiblity Certificate</option><option>Migration Certificate</option><option>Admission Commitee Form</option><option>Others</option></select></div></td>'
//  + '<td><input style="position: relativ;top: -10px;" type="text" name="" class="form-control"></td>' +
//  '<td><input style="position: relativ;top: -10px;"type="Date" name="" class="form-control"></td>' +
//  '<td><input style="position: relativ;top: -10px;"type="text" name="" class="form-control"></td>' +
//  '<td><input style="position: relativ;top: -10px;" type="text" name="" class="form-control"></td>' +

//  '<td id="td"> <p><input style="position: relativ;top: -10px;" type="hidden" id="images" name="images"role="uploadcare-uploader" data-clearable=""   data-max-width="2048"data-max-height="2048"data-integration="" /></p> <button type="button"id="closee" class="btn-sm btn-danger remove ml-3"><i class="fa fa-times" aria-hidden="true"></i></button></td>'

// }

$(function () {
  // $("#btnAdd").bind("click", function () {
  //     var div = $("<tr />");
  //     div.html(GetDynamicTextBoxx(""));
  //     $("#TextBoxContainer").append(div);
  // });
  $("body").on("click", "#close", function () {
    var table = document.getElementById("TextBoxContainer");
    var rowCountt = table.rows.length;

    if (rowCountt > 1) {
      $(this).closest("tr").remove();
    } else {
      alert("You have to upload at least one document.");
      return GetDynamicTextBoxx(value);
    }
  });
});

// function GetDynamicTextBoxx(value) {
//   return '<td> <div class="form-group"style="position: relative;top: -7px;"><i class="fa fa-caret-down "id="drop"></i><select class="form-control" id="editdrop" style="width: 200px;"><option hidde="" selected="">&nbsp;</option><option>Community Certificate</option><option>Transfer Certificate</option><option>Conduct Certificate</option><option>Eligiblity Certificate</option><option>Migration Certificate</option><option>Admission Commitee Form</option><option>Others</option></select></div></td>'
//  + '<td><input style="position: relativ;top: 10px;" type="text" name="" class="form-control"></td>' +
//  '<td><input style="position: relativ;top: 10px;" type="Date" name="" class="form-control"></td>' +
//  '<td><input style="position: relativ;top: 10px;"  type="text" name="" class="form-control"></td>' +
//  '<td><input style="position: relativ;top: 10px;"  type="text" name="" class="form-control"></td>' +

//  '<td id="td"> <p  style="position: relativ;top: 10px;"><input  type="hidden" id="images" name="images"role="uploadcare-uploader" data-clearable=""   data-max-width="2048"data-max-height="2048"data-integration="" /></p> <button style="position: relativ;top: 10px;" type="button"id="close" class="btn-sm btn-danger remove ml-3"><i class="fa fa-times" aria-hidden="true"></i></button></td>'

// }
// function getInputValue(){
//   // Selecting the input element and get its value
//   var inputVal = document.getElementById("name").value;
//   document.getElementById("p").innerHTML=inputVal;
//   // Displaying the value
//   alert(inputVal);
// }

function do_resize(textbox) {
  var maxrows = 4;
  var txt = textbox.value;
  var cols = textbox.cols;

  var arraytxt = txt.split("\n");
  var rows = arraytxt.length;

  for (i = 0; i < arraytxt.length; i++)
    rows += parseInt(arraytxt[i].length / cols);

  if (rows > maxrows) textbox.rows = maxrows;
  else textbox.rows = rows;
}
function myFunction() {
  document.getElementById("description_id").rows = 3;
  document.getElementById("description_id").cols = 10;
}
function desc3() {
  document.getElementById("description3").rows = 3;

  document.getElementById("description3").cols = 10;
}
function desc4() {
  document.getElementById("description4").rows = 3;

  document.getElementById("description4").cols = 10;
}
function desc2() {
  document.getElementById("description2").rows = 3;

  document.getElementById("description2").cols = 10;
}

// $(document).ready(function(){
//   $(".announce").click(function(){ // Click to only happen on announce links
//     $("#name").val($(this).data('id'));
//     $('#edit').modal('sho');
//   });
// });
// $(document).ready(function(){
//   $("#relv-tab").click(function(){ // Click to only happen on announce links
//   alert('hey buddy');

//   });
// });
function relv() {
  $("#collapse-195").collapse("show");
}
function surety() {
  $("#collapse-1100").collapse("show");
}
function home() {
  $("#collapse-15").collapse("show");
}
function profile() {
  $("#collapse-1-25").collapse("show");
}
function bank() {
  $("#collapse-115").collapse("show");
}
function contact() {
  $("#collapse-125").collapse("show");
}
$(document).ready(function () {
  $("#files").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files2").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name2");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files3").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name3");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files4").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name4");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files5").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name5");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files6").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name6");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files7").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name7");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });

  $("#files71").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name71");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });

  $("#files72").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name72");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });

  $("#files73").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name73");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });

  $("#files74").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name74");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_nativity1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_nativity1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_nativity").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_nativity");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files75").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name75");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });

  $("#files76").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name76");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });

  $("#files77").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name77");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });

  $("#files78").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name78");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_mdms").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_mdms");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files1_mdms").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name1_mdms");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_bsc").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bsc");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files1_bsc").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name1_bsc");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_mdms_edit").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_mdms_edit ");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files1_mdms_edit").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name1_mdms_edit ");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_mbbs_edit").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_mbbs_edit ");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files1_mbbs_edit").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name1_mbbs_edit ");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_bsc_edit").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bsc_edit ");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files1_bsc_edit").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name1_bsc_edit ");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_mdms_surety").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_mdms_surety ");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_mdms_surety_edit").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_mdms_surety_edit ");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files255").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank255");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files2554").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank2554");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files256").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank256");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files2").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank2");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files25").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank25");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files223").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank223");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files211").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank211");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files212").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank212");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files255").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank255");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files3").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank3");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files4").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank4");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#bank_files5").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_bank5");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_community").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_community");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_transfer").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_transfer");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_conduct").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_conduct");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_eligible").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_eligible");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_migration").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_migration");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_others").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_others");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_neet").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_neet");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_neetscore").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_neetscore");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_10th").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_10th");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_10thpass").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_10thpass");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_12th").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_12th");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_12thpass").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_12thpass");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_passbuk").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_passbuk");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_aadhar").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_aadhar");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_pan").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_pan");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_passport").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_passport");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_visa").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_visa");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_photo").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_photo");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_sign").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_sign");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });

  $("#files_community1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_community1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_transfer1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_transfer1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_conduct1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_conduct1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_eligible1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_eligible1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_migration1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_migration1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_others1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_others1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_neet1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_neet1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_neetscore1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_neetscore1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_10th1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_10th1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_10thpass1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_10thpass1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_12th1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_12th1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_12thpass1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_12thpass1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_passbuk1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_passbuk1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_aadhar1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_aadhar1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_pan1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_pan1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_passport1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_passport1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_visa1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_visa1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_photo1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_photo1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_sign1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_sign1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_reg").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_reg");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_diplomadeg").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_diplomadeg");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_diplomapost").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_diplomapost");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_diplomapostreg").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_diplomapostreg");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_screen").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_screen");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_diplomapostcourse").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_diplomapostcourse");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_attempt").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_attempt");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_transfercert").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_transfercert");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_conductcourse").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_conductcourse");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });

  $("#files_reg1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_reg1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_diplomadeg1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_diplomadeg1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_diplomapost1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_diplomapost1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_diplomapostreg1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_diplomapostreg1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_screen1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_screen1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_diplomapostcourse1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_diplomapostcourse1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_attempt1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_attempt1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_transfercert1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_transfercert1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
  $("#files_conductcourse1").on("change", function () {
    var target = $(this);
    var relatedTarget = target.siblings(".file-name_conductcourse1");
    var fileName = target[0].files[0].name;
    relatedTarget.val(fileName);
  });
});

$(document).ready(function () {
  $("#checkall").click(function () {
    $(".check_item").not(this).prop("checked", this.checked);
  });
  $("#checkall_main").click(function () {
    $(".check_item_main").not(this).prop("checked", this.checked);
  });
});
$(document)
  .ready(function () {
    var sign = $("#txt").SignaturePad({
      allowToSign: true,
      img64:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      border: "1px solid #c7c8c9",
      width: "300px",
      height: "150px",
      callback: function (data, action) {
        console.log(data);
      },
    });

    var sign = $("#txt2").SignaturePad({
      allowToSign: true,
      img64:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      border: "1px solid #c7c8c9",
      width: "300px",
      height: "150px",
      callback: function (data, action) {
        console.log(data);
      },
    });
  })(
    //sketch lib
    function () {
      var __slice = [].slice;

      (function ($) {
        var Sketch;
        $.fn.sketch = function () {
          var args, key, sketch;
          (key = arguments[0]),
            (args = 2 <= arguments.length ? __slice.call(arguments, 1) : []);
          if (this.length > 1) {
            $.error("Sketch.js can only be called on one element at a time.");
          }
          sketch = this.data("sketch");
          if (typeof key === "string" && sketch) {
            if (sketch[key]) {
              if (typeof sketch[key] === "function") {
                return sketch[key].apply(sketch, args);
              } else if (args.length === 0) {
                return sketch[key];
              } else if (args.length === 1) {
                return (sketch[key] = args[0]);
              }
            } else {
              return $.error("Sketch.js did not recognize the given command.");
            }
          } else if (sketch) {
            return sketch;
          } else {
            this.data("sketch", new Sketch(this.get(0), key));
            return this;
          }
        };
        Sketch = (function () {
          function Sketch(el, opts) {
            this.el = el;
            this.canvas = $(el);
            this.context = el.getContext("2d");
            this.options = $.extend(
              {
                toolLinks: true,
                defaultTool: "marker",
                defaultColor: "#000000",
                defaultSize: 2,
              },
              opts
            );
            this.painting = false;
            this.color = this.options.defaultColor;
            this.size = this.options.defaultSize;
            this.tool = this.options.defaultTool;
            this.actions = [];
            this.action = [];
            this.canvas.bind(
              "click mousedown mouseup mousemove mouseleave mouseout touchstart touchmove touchend touchcancel",
              this.onEvent
            );
            if (this.options.toolLinks) {
              $("body").delegate(
                'a[href="#' + this.canvas.attr("id") + '"]',
                "click",
                function (e) {
                  var $canvas, $this, key, sketch, _i, _len, _ref;
                  $this = $(this);
                  $canvas = $($this.attr("href"));
                  sketch = $canvas.data("sketch");
                  _ref = ["color", "size", "tool"];
                  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    key = _ref[_i];
                    if ($this.attr("data-" + key)) {
                      sketch.set(key, $(this).attr("data-" + key));
                    }
                  }
                  if ($(this).attr("data-download")) {
                    sketch.download($(this).attr("data-download"));
                  }
                  return false;
                }
              );
            }
          }

          Sketch.prototype.download = function (format) {
            var mime;
            format || (format = "png");
            if (format === "jpg") {
              format = "jpeg";
            }
            mime = "image/" + format;
            return window.open(this.el.toDataURL(mime));
          };

          Sketch.prototype.set = function (key, value) {
            this[key] = value;
            return this.canvas.trigger("sketch.change" + key, value);
          };

          Sketch.prototype.startPainting = function () {
            this.painting = true;
            return (this.action = {
              tool: this.tool,
              color: this.color,
              size: parseFloat(this.size),
              events: [],
            });
          };

          Sketch.prototype.stopPainting = function () {
            if (this.action) {
              this.actions.push(this.action);
            }
            this.painting = false;
            this.action = null;
            return this.redraw();
          };

          Sketch.prototype.onEvent = function (e) {
            if (e.originalEvent && e.originalEvent.targetTouches) {
              e.pageX = e.originalEvent.targetTouches[0].pageX;
              e.pageY = e.originalEvent.targetTouches[0].pageY;
            }
            $.sketch.tools[$(this).data("sketch").tool].onEvent.call(
              $(this).data("sketch"),
              e
            );
            e.preventDefault();
            return false;
          };

          Sketch.prototype.redraw = function () {
            var sketch;
            //this.el.width = this.canvas.width();
            this.context = this.el.getContext("2d");
            sketch = this;
            $.each(this.actions, function () {
              if (this.tool) {
                return $.sketch.tools[this.tool].draw.call(sketch, this);
              }
            });
            if (this.painting && this.action) {
              return $.sketch.tools[this.action.tool].draw.call(
                sketch,
                this.action
              );
            }
          };

          return Sketch;
        })();
        $.sketch = {
          tools: {},
        };
        $.sketch.tools.marker = {
          onEvent: function (e) {
            switch (e.type) {
              case "mousedown":
              case "touchstart":
                if (this.painting) {
                  this.stopPainting();
                }
                this.startPainting();
                break;
              case "mouseup":
              //return this.context.globalCompositeOperation = oldcomposite;
              case "mouseout":
              case "mouseleave":
              case "touchend":
              //this.stopPainting();
              case "touchcancel":
                this.stopPainting();
            }
            if (this.painting) {
              this.action.events.push({
                x: e.pageX - this.canvas.offset().left,
                y: e.pageY - this.canvas.offset().top,
                event: e.type,
              });
              return this.redraw();
            }
          },
          draw: function (action) {
            var event, previous, _i, _len, _ref;
            this.context.lineJoin = "round";
            this.context.lineCap = "round";
            this.context.beginPath();
            this.context.moveTo(action.events[0].x, action.events[0].y);
            _ref = action.events;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              event = _ref[_i];
              this.context.lineTo(event.x, event.y);
              previous = event;
            }
            this.context.strokeStyle = action.color;
            this.context.lineWidth = action.size;
            return this.context.stroke();
          },
        };
        return ($.sketch.tools.eraser = {
          onEvent: function (e) {
            return $.sketch.tools.marker.onEvent.call(this, e);
          },
          draw: function (action) {
            var oldcomposite;
            oldcomposite = this.context.globalCompositeOperation;
            this.context.globalCompositeOperation = "destination-out";
            action.color = "rgba(0,0,0,1)";
            $.sketch.tools.marker.draw.call(this, action);
            return (this.context.globalCompositeOperation = oldcomposite);
          },
        });
      })(jQuery);
    }
  )
  .call(this);

(function ($) {
  $.fn.SignaturePad = function (options) {
    //update the settings
    var settings = $.extend(
      {
        allowToSign: true,
        img64:
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        border: "1px solid #c7c8c9",
        width: "300px",
        height: "150px",
        callback: function () {
          return true;
        },
      },
      options
    );

    //control should be a textbox
    //loop all the controls
    var id = 0;

    //add a very big pad
    var big_pad = $("#signPadBig");
    var back_drop = $("#signPadBigBackDrop");
    var canvas = undefined;
    if (big_pad.length == 0) {
      back_drop = $("<div>");
      back_drop.css("position", "fixed");
      back_drop.css("top", "0");
      back_drop.css("right", "0");
      back_drop.css("bottom", "0");
      back_drop.css("left", "0");
      back_drop.css("z-index", "1040 !important");
      back_drop.css("background-color", "#000");
      back_drop.css("display", "none");
      back_drop.css("filter", "alpha(opacity=50)");
      back_drop.css("opacity", "0.5");
      $("body").append(back_drop);

      big_pad = $("<div>");
      big_pad.css("display", "none");
      big_pad.css("position", "fixed");
      big_pad.css("margin", "0 auto");
      big_pad.css("top", "0");
      big_pad.css("bottom", "0");
      big_pad.css("right", "0");
      big_pad.css("left", "0");
      big_pad.css("z-index", "1000002 !important");
      big_pad.css("overflow", "hidden");
      big_pad.css("outline", "0");
      big_pad.css("-webkit-overflow-scrolling", "touch");

      big_pad.css("right", "0");
      big_pad.css("border", "1px solid #c8c8c8");
      big_pad.css("padding", "15px");
      big_pad.css("background-color", "white");
      big_pad.css("margin-top", "15px");
      big_pad.css("width", "95%");
      big_pad.css("height", "90%");
      big_pad.css("border-radius", "10px");
      big_pad.attr("id", "signPadBig");
      $("body").append(big_pad);

      var update_canvas_size = function () {
        var w = big_pad.width(); //* 0.95;
        var h = big_pad.height() - 55;

        canvas.attr("width", w);
        canvas.attr("height", h);
      };

      canvas = $("<canvas>");
      canvas.css("display", "block");
      canvas.css("margin", "0 auto");
      canvas.css("border", "1px solid #c8c8c8");
      canvas.css("border-radius", "10px");
      //canvas.css('width', '90%');
      //canvas.css('height', '80%');
      big_pad.append(canvas);

      update_canvas_size();
      $(window).on("resize", function () {
        update_canvas_size();
      });

      var clearCanvas = function () {
        canvas.sketch().action = null;
        canvas.sketch().actions = []; // this line empties the actions.
        var ctx = canvas[0].getContext("2d");
        ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
        return true;
      };

      var _get_base64_value = function () {
        var text_control = $.data(big_pad[0], "control"); //settings.control; // $('#' + big_pad.attr('id'));
        return $(text_control).val();
      };

      var copyCanvas = function () {
        //get data from bigger pad
        var sigData = canvas[0].toDataURL("image/png");

        var _img = new Image();
        _img.onload = resizeImage;
        _img.src = sigData;

        var targetWidth = canvas.width();
        var targetHeight = canvas.height();

        function resizeImage() {
          var imageToDataUri = function (img, width, height) {
            // create an off-screen canvas
            var canvas = document.createElement("canvas"),
              ctx = canvas.getContext("2d");

            // set its dimension to target size
            canvas.width = width;
            canvas.height = height;

            // draw source image into the off-screen canvas:
            ctx.drawImage(img, 0, 0, width, height);

            // encode image to data-uri with base64 version of compressed image
            return canvas.toDataURL();
          };

          var newDataUri = imageToDataUri(this, targetWidth, targetHeight);
          var control_img = $.data(big_pad[0], "img");
          if (control_img) $(control_img).attr("src", newDataUri);

          var text_control = $.data(big_pad[0], "control"); //settings.control; // $('#' + big_pad.attr('id'));
          if (text_control) $(text_control).val(newDataUri);
        }
      };

      var buttons = [
        {
          title: "Close",
          callback: function () {
            clearCanvas();
            big_pad.slideToggle(function () {
              back_drop.hide("fade");
            });
          },
        },
        {
          title: "Clear",
          callback: function () {
            clearCanvas();
            if (settings.callback)
              settings.callback(_get_base64_value(), "clear");
          },
        },
        {
          title: "Accept",
          callback: function () {
            copyCanvas();
            clearCanvas();
            big_pad.slideToggle(function () {
              back_drop.hide("fade", function () {
                if (settings.callback)
                  settings.callback(_get_base64_value(), "accept");
              });
            });
          },
        },
      ].forEach(function (e) {
        var btn = $("<button>");
        btn.attr("type", "button");
        btn.css("border", "1px solid #c8c8c8");
        btn.css("background-color", "white");
        btn.css("padding", "10px");
        btn.css("display", "block");
        btn.css("margin-top", "15px");
        btn.css("margin-right", "5px");
        btn.css("cursor", "pointer");
        btn.css("border-radius", "5px");
        btn.css("float", "right");
        btn.css("height", "40px");
        btn.text(e.title);
        btn.on("click", function () {
          e.callback(e.title);
        });
        big_pad.append(btn);
      });
    } else {
      canvas = big_pad.find("canvas")[0];
    }

    //init the signpad
    if (canvas) {
      var sign1big = $(canvas).sketch({ defaultColor: "#000", defaultSize: 5 });
    }

    //for each control
    return this.each(function () {
      var control = $(this);
      control.hide();

      //get the control parent
      var wrapper = control.parent();
      var img = $("<img>");

      //style it
      img.css("cursor", "pointer");
      img.css("border", settings.border);
      img.css("height", settings.height);
      img.css("width", settings.width);
      img.css("border-radius", "5px");
      img.attr("src", settings.img64);

      if (typeof wrapper == "object") {
        wrapper.append(img);
      }

      //init the big sign pad
      if (settings.allowToSign == true) {
        //click to the pad bigger
        img.on("click", function () {
          //show the pad
          back_drop.show();
          big_pad.slideToggle();

          //save control to use later
          $.data(big_pad[0], "img", img);
          $.data(big_pad[0], "control", control);

          //settings.control = control;
          //settings.img = img;
        });
      }
    });
  };
})(jQuery);

(function ($) {
  // $('#report_popup input[type=checkbox]').change(function(e){
  //     if ($('#report_popup input[type=checkbox]:checked').length > 5) {

  //         $(this).prop('checked', false)

  //          alert("allowed only 5");
  //     }
  //  })
  $("#report_popup input[type=checkbox]").change(function () {
    var max = 6;
    if ($("#report_popup input[type=checkbox]:checked").length == max) {
      $("#report_popup input[type=checkbox]").attr("disabled", "disabled");
      $("#report_popup input[type=checkbox]:checked").removeAttr("disabled");
    } else {
      $("#report_popup input[type=checkbox]").removeAttr("disabled");
    }
  });
  var CheckboxDropdown = function (el) {
    var _this = this;
    this.isOpen = false;
    this.areAllChecked = false;
    this.$el = $(el);
    this.$label = this.$el.find(".dropdown-label");
    this.$checkAll = this.$el.find('[data-toggle="check-all"]').first();
    this.$inputs = this.$el.find('[type="checkbox"]');

    this.onCheckBox();

    this.$label.on("click", function (e) {
      e.preventDefault();
      _this.toggleOpen();
    });

    this.$checkAll.on("click", function (e) {
      e.preventDefault();
      _this.onCheckAll();
    });

    this.$inputs.on("change", function (e) {
      _this.onCheckBox();
    });
  };

  CheckboxDropdown.prototype.onCheckBox = function () {
    this.updateStatus();
  };

  CheckboxDropdown.prototype.updateStatus = function () {
    var checked = this.$el.find(":checked");

    this.areAllChecked = false;
    this.$checkAll.html("Check All");

    if (checked.length <= 0) {
      // this.$label.html('Select Options');
      this.$label.text();
    } else if (checked.length === 1) {
      this.$label.html(checked.parent("label").text());
    } else if (checked.length === this.$inputs.length) {
      this.$label.html("All Selected");
      this.areAllChecked = true;
      this.$checkAll.html("Uncheck All");
    } else {
      this.$label.html(checked.length + " Selected");
    }
  };

  CheckboxDropdown.prototype.onCheckAll = function (checkAll) {
    if (!this.areAllChecked || checkAll) {
      this.areAllChecked = true;
      this.$checkAll.html("Uncheck All");
      this.$inputs.prop("checked", true);
    } else {
      this.areAllChecked = false;
      this.$checkAll.html("Check All");
      this.$inputs.prop("checked", false);
    }

    this.updateStatus();
  };

  CheckboxDropdown.prototype.toggleOpen = function (forceOpen) {
    var _this = this;

    if (!this.isOpen || forceOpen) {
      this.isOpen = true;
      this.$el.addClass("on");
      $(document).on("click", function (e) {
        if (!$(e.target).closest("[data-control]").length) {
          _this.toggleOpen();
        }
      });
    } else {
      this.isOpen = false;
      this.$el.removeClass("on");
      $(document).off("click");
    }
  };

  var checkboxesDropdowns = document.querySelectorAll(
    '[data-control="checkbox-dropdown"]'
  );
  for (var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
    new CheckboxDropdown(checkboxesDropdowns[i]);
  }
})(jQuery);
