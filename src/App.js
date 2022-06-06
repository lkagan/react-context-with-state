import { useAppContext } from "./AppContext";

function App() {
    const { username, setUsername } = useAppContext();

    return (
        <div>
            Username is <input
            type="text"
            value={ username }
            onChange={ e => setUsername(e.target.value) }
        />
        </div>
    );
}

export default App;
