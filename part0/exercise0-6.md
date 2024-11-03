sequenceDiagram
    participant browser
    participant server

    Note right of browser: User types a note and clicks Save in SPA

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with JSON data
    activate server
    server-->>browser: {"message": "note created"}
    deactivate server

    Note right of browser: SPA JavaScript updates the notes list in the browser without reloading
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Updated JSON data with new note
    deactivate server

    Note right of browser: Browser re-renders the notes list with the new note
