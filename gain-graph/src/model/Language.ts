
export class Language{
    private _appName: string | undefined
    public get appName(): string | undefined {
        return this._appName
    }
    public set appName(value: string | undefined) {
        this._appName = value
    }

}

export const german = new Language()
german.appName = "GainGraph";

export const english = new Language()
english.appName = "GainGraph";