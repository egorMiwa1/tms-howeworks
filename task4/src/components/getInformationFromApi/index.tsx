const RANDOM_URL= "https://studapi.teachmeskills.by";
export const getRandomInformation = async (number:number) => 
	(await fetch(`${RANDOM_URL}/blog/posts/${number}`)).json().then(data => data)

	