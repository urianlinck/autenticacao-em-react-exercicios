import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function FeedPage() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    

    if (!token) {
      
      navigate('/');
    }
  }, [navigate, token]);

  return (
    <main>
      <h1>Página de Feed</h1>
    </main>
  );
}

export default FeedPage;