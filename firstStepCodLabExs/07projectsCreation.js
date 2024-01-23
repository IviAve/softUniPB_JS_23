function projectsCreation (input)
{
   let arhitectName = input[0];
   let numProjects = Number(input[1]);

   let needTime = numProjects * 3 ;

   console.log(`The architect ${arhitectName} will need ${needTime} hours to complete ${numProjects} project/s.`)
}
projectsCreation(["George" , "4"]);