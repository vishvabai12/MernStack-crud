const Organization = require('../models/organization');

exports.createOrganization = async (req, res) => {
  try {
    const organization = await Organization.create(req.body);
    res.status(201).json({ organization });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json({ organizations });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrganizationById = async (req, res) => {
  try {
    const organization = await Organization.findById(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.status(200).json({ organization });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOrganization = async (req, res) => {
  try {
    const organization = await Organization.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.status(200).json({ organization });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteOrganization = async (req, res) => {
  try {
    const organization = await Organization.findByIdAndDelete(req.params.id);
    if (!organization) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
