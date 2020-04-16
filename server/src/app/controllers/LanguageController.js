import api from '../../api';
import { languages } from '../utils/languages';
import Language from '../models/Language';

class LanguageController {
    async index (req, res) {
        const langs = await Language.find().sort({ language: 1 });

        return res.json(langs);
    }

    async store (lang) {
        try {
            const resp = await api.get(`/search/repositories?q=language:${lang}`);
            const { data } = resp;

            await Language.findOneAndUpdate({
                language: lang,                
            }, {
                language: lang,
                count: data.total_count,
                createdAt: new Date(),
                updatedAt: new Date(),                 
            }, {
                new: true,
                upsert: true,
                useFindAndModify: false
            });
        } catch (error) {
            console.log(error);
        }

        return true;
    }

    async getByLanguage (req, res) {
        const { lang } = req.params;

        const response = await api.get(`/search/repositories?q=language:${lang}`);
        const { items } = response.data;
        
        return res.json(items);       
    }
}

export default new LanguageController();