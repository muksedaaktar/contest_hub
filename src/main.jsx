import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import './index.css'
import App from './App.jsx'
import { router } from './routes/Routes.jsx';
import { AuthProvider } from './context/Authcontext.jsx';
import { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
     
      <QueryClientProvider client={queryClient}> 
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </AuthProvider>
    </QueryClientProvider>
     
  </StrictMode>
)
