import Navigation from './app/navigation/index';
import {AuthProvider} from "./app/contexts/jwt-context";

export default function App() {
  return (
      <AuthProvider>
        <Navigation />
      </AuthProvider>
  );
}
