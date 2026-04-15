import designs from '../../../data/designsLibrary';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Get all designs or filter by category
    const { category } = req.query;
    
    if (category && category !== 'All') {
      return res.status(200).json(
        designs.filter(d => d.category === category)
      );
    }

    return res.status(200).json(designs);
  }

  if (req.method === 'PUT') {
    // Update design (admin only)
    const { id, price, name } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Design ID required' });
    }

    const designIndex = designs.findIndex(d => d.id === id);
    if (designIndex === -1) {
      return res.status(404).json({ error: 'Design not found' });
    }

    if (price !== undefined) {
      designs[designIndex].price = price;
    }
    if (name !== undefined) {
      designs[designIndex].name = name;
    }

    return res.status(200).json({
      success: true,
      design: designs[designIndex]
    });
  }

  if (req.method === 'DELETE') {
    // Delete design (admin only)
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Design ID required' });
    }

    const designIndex = designs.findIndex(d => d.id === id);
    if (designIndex === -1) {
      return res.status(404).json({ error: 'Design not found' });
    }

    designs.splice(designIndex, 1);
    return res.status(200).json({ success: true, message: 'Design deleted' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
