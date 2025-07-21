import Swal from 'sweetalert2'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function MyTaskPage() {
const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      Swal.fire({
        title: 'Error!',
        text: 'Page is still on review',
        icon: 'error',
        confirmButtonText: 'Back to home page'
      }).then(() => {
        navigate('/');
      });
    }, 500); 
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div>
     
    </div> 
  )
}

export default MyTaskPage
