import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/perfil')}
        className="mb-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Voltar ao Perfil
      </button>
      <iframe
        title="dash_hacka_impuslo"
        width="100%"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiMmJkZDhmYjAtMGE1Yy00NDQ1LWI5ZTQtYWQxYzk3ZDVhYTBiIiwidCI6IjExZGJiZmUyLTg5YjgtNDU0OS1iZTEwLWNlYzM2NGU1OTU1MSIsImMiOjR9"
        frameBorder="0"
        allowFullScreen={true}
        className="w-full border rounded-lg shadow-md"
      ></iframe>
    </div>
  );
};

export default Dashboard;