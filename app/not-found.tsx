import notFountImage from './img/404-not-found.png';

export default function NotFound() {
  return (
    <div className="text-center bg-gray-0 w-full h-full min-h-screen relative">
        <img src={notFountImage.src} alt="404 Not Found" className={`w-full h-full max-w-2xl mx-auto py-15`}/>
    </div>
  );
}