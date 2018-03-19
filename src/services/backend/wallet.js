import Axios from 'axios'

// TODO: Isso nao deveria retornar só a wallet?
export const requestWithdrawAction = async (id, walletWithPaypalAccount) => {
  const response = await Axios.put(
    `/users/${id}/requestwithdraw`,
    walletWithPaypalAccount
  )

  return response.data
}
