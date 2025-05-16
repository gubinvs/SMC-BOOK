function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token && isTokenValid(token)) {
        setIsAuthenticated(true);
      }
      setLoading(false);
    }, []);
  
    if (loading) {
      return <div>Загрузка...</div>; 
    }
  
    return isAuthenticated ? children : <Navigate to="/Panel" replace />;
  }
  