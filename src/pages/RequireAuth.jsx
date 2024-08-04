import { redirect } from "react-router-dom"

redirect

export async function requireAuth() {
      let isLogging = false

      if(!isLogging){
        throw redirect('/login')
      }
  
  
}

  
