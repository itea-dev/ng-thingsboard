
class ChangePasswordRequest {

  constructor(
    public currentPassword: string,
    public newPassword: string
  ) { }

}

class ChangePasswordRequestMaker {
  static create(event: ChangePasswordRequest) {
    return new ChangePasswordRequest(event.currentPassword, event.newPassword);
  }
}
