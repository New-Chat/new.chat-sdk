# createPublicChannel

### Parameters:

* @param channel - public channel tag
* @param owner - owner account
* @param description - description of the channel

### Description:

Creates public channel with default public encryption key pair.

### Required Authorization:

**owner** account.

---

# createPrivateChannel

### Parameters:

* @param channel - private channel tag
* @param owner - owner account
* @param description - description of the channel

### Description:

Creates private channel with custom public encryption key pair.

### Required Authorization:

**owner** account.

---

# sendDirectMessage

### Parameters:

* @param from - from account
* @param to - to account
* @param iv - initialization vector
* @param ephemKey - ephemeral public key
* @param cipherText - encrypted message
* @param mac - message authentication code

### Description:

Send direct message.

### Required Authorization:

**from** account.

---

# sendPrivateChannelMessage

### Parameters:

* @param from - from account
* @param channel - private channel tag
* @param iv - initialization vector
* @param ephemKey - ephemeral public key
* @param cipherText - encrypted message
* @param mac - message authentication cod

### Description:

Send private channel message.

### Required Authorization:

**from** account.

---

# sendPublicChannelMessage

### Parameters:

* @param from - from account
* @param channel - public channel tag
* @param iv - initialization vector
* @param ephemKey - ephemeral public key
* @param cipherText - encrypted message
* @param mac - message authentication cod

### Description:

Send public channel message.

### Required Authorization:

**from** account.
