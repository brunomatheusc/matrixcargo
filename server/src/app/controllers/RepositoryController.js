import api from './../../api';

class RepositoryController {
    async index (req, res) {
        const { id } = req.params,
            { page = 1, perPage = 5 } = req.query;

        const response = await api.get(`/search/repositories?q=language:${id}&page=${page}&per_page=${perPage}`);
        const { items } = response.data;
        
        return res.json(items);
    }
}

export default new RepositoryController();