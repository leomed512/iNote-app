let form = document.querySelector('#form');
let input = document.querySelector('#postInput');
let msg = document.querySelector('#msg');
let posts = document.querySelector('#posts');


/// Form validation
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('Button clicked');

    formValidation();
});

let formValidation = () => {
    if (input.value == "") {
        msg.innerHTML = 'Post cannot be blank';
        console.log('Failure');
    } else {
        console.log('Success');
        msg.innerHTML = "";
        acceptData();
    }
};

/// getting data
let data = {};

let acceptData = () => {
    data['text'] = input.value;
    console.log(data);
    createPost();
};

///creating data

let createPost = () => {
    posts.innerHTML += `
    <div class="mt-3">
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
  };

////deleting data

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

//two times parentElement to acces i, a, and div elements and remove them

///read and editing posts 

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML; //takes content from post to textarea (read)
    e.parentElement.parentElement.remove();
};