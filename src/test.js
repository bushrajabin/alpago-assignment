function btn(title, onClickFn) {
  return (
    <div>
      <button title={title} onClick={onClickFn} />
    </div>
  );
}

function loginNow() {
  /**
   * do something  on user login
   */
}

function registerNow() {
  /**
   * do something  on user register
   */
}

btn("login", loginNow);

btn("regiter", registerNow);

btn("regiter", () => {});
