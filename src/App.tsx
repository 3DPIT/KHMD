import { appSettingStore } from 'stores/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAddTodo } from 'features/useMutation/useMutation';
export function App() {
    const isInternalApp = appSettingStore((state) => state.isInternalApp);
    console.log('isInternalApp', isInternalApp);
    return <div className="App"><></></div>;
}
