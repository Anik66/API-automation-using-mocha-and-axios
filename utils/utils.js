import fs from 'fs';
const generateRandomNumber=(min,max)=>{
    return Math.round(Math.random()*(max-min)+min)
}

export default generateRandomNumber;

export function writeUserData(data){
     const filePath = './users.json';
    
       
        let users = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            if (fileContent) {
                users = JSON.parse(fileContent);
            }
        }
        users.push(data)
        fs.writeFileSync(filePath, JSON.stringify(users, null, 4), 'utf-8');

        console.log(`data save to ${filePath}`)


}

export function ReadUserdataByRole(role){
    const filePath = './users.json';
    try{
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const users = JSON.parse(fileContent);
        return users.filter(user=>user.role === role)
    }
    catch(error){
        console.log(error.meassage)
        return[];
    }

}