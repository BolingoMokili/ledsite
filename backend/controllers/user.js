const client = require('../database/database')



const login = async (req, res) => {
    var userCredentials = {}
   await client.connect()
   client.query('SELECT * FROM user', (err, result) => {
       if(!err){
          userCredentials = result.rows
       }
       client.end();
   })
   if(req.body.email === userCredentials.email && req.body.password === userCredentials.password){
       res.redirect('/admin-panel');
   }
}

const addPost = async (req, res) =>{
    const postContent = {id: 1, header: req.body.post_header, post: req.body.post};
    await client.connect();
    client.query(
        `INSERT INTO posts
        (
        post_id, 
        post_header, 
        post
        )
        VALUES(
            ${postContent.id}, 
            ${postContent.header}, 
            ${postContent.post}
            );`,
            (err, result)=>{
                if(!err){
                    console.log(result.rows);
                }
                client.end();
            }
            );
}

const updatePost = async (req, res) => {
    await client.connect();
}

const deletePost = async (req, res) => {
    await client.connect();
}

const getSinglePost = async (req, res) => {
    await client.connect();
}

const getAllPosts = async (req, res) => {
    await client.connect();
}

const donationHistory = async (req, res) => {
    await client.connect();
}


module.exports = {
    login,
    addPost,
    updatePost,
    deletePost,
    getSinglePost,
    getAllPosts,
    donationHistory
}