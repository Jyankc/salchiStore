const branchService = require('../services/branches.service')

const get = async (req, res) => {
  try {
    const branches = await branchService.getBranches()
    res.status(200).json({ data: branches, message: 'Sucursales obtenidas con exito' })
  } catch (error) {
    res.status(400).json(error)
  }
}
const create = async (req, res) => {
  const { state, city, streetName, houseNumber, countryId, phoneNumber } = req.body
  try {
    if (!state || !city || !streetName || !houseNumber || !countryId) { return res.status(401).json({ message: 'Faltan datos para poder agregar sucursal' }) } else if (phoneNumber && ((isNaN((parseInt(phoneNumber)))))) { return res.status(401).json({ mesagge: 'El telefóno solo puede contener numeros' }) } else {
      const newBranch = await branchService.addNewBranch(req.body)
      if (Array.isArray(newBranch)) { return res.status(400).json({ message: 'La sucursal ya se encuentra agregada.  ' }) } else {
        res.status(200).json({ data: newBranch, message: 'sucursal agregada con exito' })
      }
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

const update = async (req, res) => {
  const { id, state, city, streetName, houseNumber, countryId, phoneNumber } = req.body

  try {
    if (!id || !state || !city || !streetName || !houseNumber || !countryId) { return res.status(400).json({ message: 'Faltan datos para poder modificar la sucursal' }) } else if (phoneNumber && ((isNaN((parseInt(phoneNumber)))))) { return res.status(401).json({ mesagge: 'El telefóno solo puede contener numeros' }) } else {
      const modifiedBranch = await branchService.modifyBranch(req.body)
      if (!modifiedBranch) { return res.status(404).json({ message: 'La sucursal que busca modificar no existe o fue eliminada' }) } else {
        res.status(200).json({ data: modifiedBranch, message: 'Sucursal modificada con exito' })
      }
    }
  } catch (error) {
    res.status(400).json(error)
  }
}

const branchStatus = async (req, res) => {
  const { id } = req.params

  try {
    if (!(typeof parseInt(id) === 'number')) { return res.status(400).json({ message: 'Por favor ingrese un ID numerico' }) }
    const deletedBranch = await branchService.changeBranchStatus(id)
    if (!deletedBranch) { return res.status(404).json({ message: 'La sucursal que busca eliminar no existe' }) }
    res.status(200).json({ data: deletedBranch, message: 'Sucursal eliminada con exito' })
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  get,
  create,
  update,
  branchStatus

}