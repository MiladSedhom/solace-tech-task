import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StyledEngineProvider } from '@mui/material'
import ApolloAppProvider from './api/ApolloProvider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ApolloAppProvider>
			<StyledEngineProvider injectFirst>
				<App />
			</StyledEngineProvider>
		</ApolloAppProvider>
	</StrictMode>,
)
