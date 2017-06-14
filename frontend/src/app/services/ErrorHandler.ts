export class ErrorHandler {
  private static texts = {
    'wrong_username_password': 'Hibás felhasználónév vagy jelszó',
    'wrong_username': 'Hibás felhasználónév',
    'wrong_password': 'Hibás jelszó',
    'wrong_km': 'Hibás kilóméter',
    'car_not_exist': 'A gépjármű nem létezik',
    'car_is_not_free': 'A gépjárművet már valaki lefoglalta',
    'user_has_hold': 'Önnek már van 1 foglalása',
    'wrong_plateNr': 'Hibás rendszám',
    'wrong_year': 'Hibás évjárat',
    'wrong_engineSize': 'Hibás köbcenti',
    'prong_petrol': 'Hibás üzemanyag'
  };

  public static handle(error) {
    if (error.status === 400) {
      let map = ErrorHandler.texts[error.message];

      if (map)
        return map;
    }

    if (error.message)
      return error.message;

    return error;
  }
}
