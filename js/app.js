//get
let get_zone = document.getElementById(`get_zone`);
let get_button = document.getElementById(`get`);

function failureFunctionGet(response) {
    get_zone.insertAdjacentHTML(`afterend`, `<h1>failed</h1>`);
};

function successFunctionGet(response) {
    get_zone.insertAdjacentHTML(`afterend`, `<h1>success</h1>`);
    for (i = 0; i < response.data.data.length; i++) {
        get_zone.insertAdjacentHTML(`afterend`, `<h1>${response.data.data[i].first_name} ${response.data.data[i].last_name}</h1>
        <p>${response.data.data[i].email}</p><img src="${response.data.data[i].avatar}">`);
    };
};

function get_users(details) {
    axios.request({
        url: `https://reqres.in/api/users`
    }).then(successFunctionGet).catch(failureFunctionGet);
};

get_button.addEventListener(`click`, get_users);


//post 

let post_zone = document.getElementById(`create_zone`);
let post_button = document.getElementById(`create_employee`);


function failureFunctionPost(response) {
    post_zone.insertAdjacentHTML(`afterend`, `<h1>failed</h1>`);
};


function successFunctionPost(response) {
    let name_value = name_id[`value`];
    let job_value = job_id[`value`];
    post_zone.insertAdjacentHTML(`afterend`, `<h1>success post</h1>`);
    post_zone.insertAdjacentHTML(`afterend`, `<h1>${name_value}</h1><p>${job_value}</p><p>Created at:</p><p>ID:</p>`)
};

let name_id = document.getElementById(`name`);
let job_id = document.getElementById(`job`);


function post_user(details) {
    let name_value = name_id[`value`];
    let job_value = job_id[`value`];
    axios.request({
        url: `https://reqres.in/api/users`,
        Method: `POST`,
        data: {
            first_name: `${name_value}`,
            job: `${job_value}`
        }
    });
};
post_button.addEventListener(`click`, post_user);