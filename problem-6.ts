/*
Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
{
  name: "Alice",
  age: 26,
  email: "alice@example.com"
}
*/

interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (profile: Profile, updatedProfileData: Partial<Profile>): Profile => {
    return { ...profile, ...updatedProfileData };
}

// Testing
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));