import {useQuery,useMutation} from '@tanstack/react-query'

const POSTS =[
  {
    id:1,
    title:'post 1'
  },
  {
    id:2,
    title:'post 2'
  }
];

const App = ()=>{
  const postQuery = useQuery({
    queryKey:["posts"],
    queryFn: ()=> wait(1000).then(()=> [...POSTS])
  })

if(postQuery.isLoading) return <h1>...Loading</h1>
if(postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>

  return(
    <>
    {postQuery.data.map((data)=>{
      return <p>{data.title}</p>
    })}
    </>
  )
}

function wait(duration:number){
return new Promise(resolve => setTimeout(resolve, duration));
}

export default App;