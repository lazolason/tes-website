# Dockerized MCP client configuration for Codex

Use this guide to run the MCP CLI against the Codex server entirely through Docker. The sample configuration keeps credentials out of the repository and mounts everything under the standard MCP config path inside the container.

## Prerequisites

- Docker installed locally.
- A Codex API key exported in your shell as `CODEX_API_KEY`.

⚠️ **Note on Image Access**: The Docker-based MCP client (`ghcr.io/modelcontextprotocol/clients/cli`) and Codex server (`ghcr.io/modelcontextprotocol/servers/codex`) images are hosted on GHCR and may require special access permissions. If you receive a `denied: permission_denied` error when pulling images, you do not currently have access to use this approach.

**Alternatives if you don't have access:**
- Use Codex native MCP support (if your environment supports it)
- Try the [Docker Desktop MCP Toolkit Beta](https://www.docker.com/products/mcp/)
- Set up a local MCP server following the [Model Context Protocol documentation](https://modelcontextprotocol.io/)

## 1) Copy the Codex MCP client config

The repository includes an example client configuration that launches the Codex server via Docker when requested by the MCP CLI.

```bash
mkdir -p ~/.config/mcp
cp config/mcp/mcp-codex.example.json ~/.config/mcp/config.json
```

If you prefer to keep the configuration within the project directory, you can mount that path instead when running the client (see step 2).

## 2) Run the MCP client in Docker

Start the official MCP CLI container and mount the directory containing the configuration file. The CLI will be able to reach the Codex server using the `codex` entry defined in the config.

```bash
docker run --rm -it \
  -e CODEX_API_KEY="$CODEX_API_KEY" \
  -v "$HOME/.config/mcp:/root/.config/mcp" \
  ghcr.io/modelcontextprotocol/clients/cli:latest
```

Once the CLI starts, connect to the Codex server with:

```bash
connect codex
```

To exit the client, press `Ctrl+D` or type `exit`.

## Notes

- The example config references the `ghcr.io/modelcontextprotocol/servers/codex:latest` image. If you need a different tag or registry, update both the `command` and `args` entries in `config/mcp/mcp-codex.example.json`.
- Keep your `CODEX_API_KEY` out of version control. Export it in your shell or load it from a secrets manager before starting the CLI.
