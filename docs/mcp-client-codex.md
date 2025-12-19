# Dockerized MCP client configuration for Codex

Use this guide to run the MCP CLI against the Codex server entirely through Docker. The sample configuration keeps credentials out of the repository and mounts everything under the standard MCP config path inside the container.

## Prerequisites

- Docker installed locally.
- A Codex API key exported in your shell as `CODEX_API_KEY`.
- Access to your host Docker daemon (mounting `/var/run/docker.sock`) and a Docker CLI binary available to the MCP client container.

## 1) Copy the Codex MCP client config

The repository includes an example client configuration that launches the Codex server via Docker when requested by the MCP CLI.

```bash
mkdir -p ~/.config/mcp
cp config/mcp/mcp-codex.example.json ~/.config/mcp/config.json
```

If you prefer to keep the configuration within the project directory, you can mount that path instead when running the client (see step 2).

## 2) Run the MCP client in Docker

Start the official MCP CLI container and mount the directory containing the configuration file. To allow the Codex server to launch via Docker from inside the container, also mount your host Docker socket and Docker CLI binary. The CLI will be able to reach the Codex server using the `codex` entry defined in the config.

```bash
docker run --rm -it \
  -e CODEX_API_KEY="$CODEX_API_KEY" \
  -v "$HOME/.config/mcp:/root/.config/mcp" \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$(which docker)":/usr/bin/docker \
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
