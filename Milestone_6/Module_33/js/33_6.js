function loadPosts()
{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts)
{
    const postsContainer = document.getElementById('posts-container');
    
    for(const post of posts)
    {
        console.log(post);

        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h4>User - ${post.userId}</h4>
            <h5>Post: title: ${post.title}</h5>
            <h6>Post: Description: ${post.body}</h6>
        `
        postDiv.classList.add('post');
        postsContainer.appendChild(postDiv);

    }
}

// document.getElementById('posts-container');



loadPosts();