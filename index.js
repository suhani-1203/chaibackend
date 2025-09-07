require('dotenv').config()
const express=require('express')
const app=express()

const githubData={
  "login": "suhani-1203",
  "id": 174350664,
  "node_id": "U_kgDOCmRhSA",
  "avatar_url": "https://avatars.githubusercontent.com/u/174350664?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/suhani-1203",
  "html_url": "https://github.com/suhani-1203",
  "followers_url": "https://api.github.com/users/suhani-1203/followers",
  "following_url": "https://api.github.com/users/suhani-1203/following{/other_user}",
  "gists_url": "https://api.github.com/users/suhani-1203/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/suhani-1203/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/suhani-1203/subscriptions",
  "organizations_url": "https://api.github.com/users/suhani-1203/orgs",
  "repos_url": "https://api.github.com/users/suhani-1203/repos",
  "events_url": "https://api.github.com/users/suhani-1203/events{/privacy}",
  "received_events_url": "https://api.github.com/users/suhani-1203/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Suhani Agarwal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-07-01T14:07:27Z",
  "updated_at": "2025-07-08T08:44:01Z"
}

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/twitter',(req,res)=>{
    res.send("suhani-1203")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login to chai aur code</h1>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})