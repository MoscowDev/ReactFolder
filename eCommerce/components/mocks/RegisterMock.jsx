export function RegisterMock(userInput) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                fullName: userInput.fullName || "",
                email: userInput.email || "",
                password: userInput.password || "",
                confirmPassword: userInput.confirmPassword || "",
                termsAccepted: userInput.termsAccepted || false,
                
            });
        
        }, 1000);       
    
//   return {
//     email: userInput.email || "",
//     password: userInput.password || "",
//     confirmPassword: userInput.confirmPassword || "",
//     termsAccepted: userInput.termsAccepted || false,
//   };
    }); 
}