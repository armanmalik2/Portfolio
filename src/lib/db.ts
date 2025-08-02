export const users: { id:number; name: string }[] = [];

let currentid = 1;

export function addUser(name:string){
    const user = { id: currentid++ , name};
    users.push(user);
    return user;
}