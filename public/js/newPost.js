const newPost = async () => {

    const content = document.getElementById('content').value.trim();
    const title = document.getElementById('title').value.trim();
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok){
      document.location.replace('/');
    } else {
      alert('failed to Post')
    }

  };

  function myFunction(e){
    e.preventDefault()
    newPost()
  }
  const commentForm = document.getElementById('comment-form');
  
  commentForm.addEventListener('submit', myFunction);
 