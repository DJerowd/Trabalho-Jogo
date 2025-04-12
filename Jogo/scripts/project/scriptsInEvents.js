

const scriptsInEvents = {

	async EventSheetAct1And2_Event27_Act2(runtime, localVars)
	{
		// obter variavel global de baixas
		let kills = runtime.globalVars.Kills;
		
		// adicionar 1 baixa nova
		kills++;
		
		// atualizar variavel global de baixas
		runtime.globalVars.Kills = kills;
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
