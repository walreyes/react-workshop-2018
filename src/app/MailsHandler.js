class MailsHandler {
  static findMailById(mails, mailId) {
    return mails.find(mail => mail.id == mailId);
  }

  static replaceMail(mails, mailToReplace) {
    const mailIndex = mails.findIndex(mail => mail.id == mailToReplace.id);
    let newMails = mails.slice();
    newMails.splice(mailIndex, 1, mailToReplace);
    return newMails;
  }

  static markMailAsRead(mails, mailId) {
    let mail = MailsHandler.findMailById(mails, mailId);
    mail.read = true;

    const newMails = MailsHandler.replaceMail(mails, mail);
    return newMails;
  }

  static toggleMailChecked(mails, mailId) {
    let mail = MailsHandler.findMailById(mails, mailId);
    mail.checked = !mail.checked;

    const newMails = MailsHandler.replaceMail(mails, mail);
    return newMails;
  }

  static toggleMailBookmark(mails, mailId) {
    let mail = MailsHandler.findMailById(mails, mailId);
    mail.bookmarked = !mail.bookmarked;

    const newMails = MailsHandler.replaceMail(mails, mail);
    return newMails;
  }

  static searchMails(mails, searchCriteria) {
    const pattern = new RegExp(searchCriteria, 'i');

    return mails.filter(mail => {
      return pattern.test(mail.from) || pattern.test(mail.subject);
    });
  }
}

export default MailsHandler;
